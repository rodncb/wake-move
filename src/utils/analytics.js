// Analytics e Tracking para Wake & Move
// Sistema de captura de dados para conversões

class WakeMoveAnalytics {
  constructor() {
    this.apiEndpoint = "https://wakeandmove.com.br/api/analytics";
    this.eventName = "wake-move-primavera-2025";
  }

  // Salvar dados de inscrição
  async saveRegistration(formData) {
    const registrationData = {
      ...formData,
      timestamp: new Date().toISOString(),
      event: this.eventName,
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      utm_source: this.getUrlParameter("utm_source"),
      utm_medium: this.getUrlParameter("utm_medium"),
      utm_campaign: this.getUrlParameter("utm_campaign"),
      sessionId: this.getOrCreateSessionId(),
    };

    // Salvar localmente como backup
    this.saveToLocalStorage(registrationData);

    // Tentar enviar para o servidor
    try {
      await this.sendToServer(registrationData);
    } catch (error) {
      console.log(
        "Erro ao enviar para servidor, dados salvos localmente:",
        error
      );
    }

    // Enviar para Google Analytics (se configurado)
    this.sendToGoogleAnalytics(registrationData);

    return registrationData;
  }

  // Salvar no localStorage com estrutura organizada
  saveToLocalStorage(data) {
    try {
      // Buscar dados existentes
      const existingData = JSON.parse(
        localStorage.getItem("wakeMoveRegistrations") || "[]"
      );

      // Adicionar novo registro
      existingData.push(data);

      // Salvar de volta
      localStorage.setItem(
        "wakeMoveRegistrations",
        JSON.stringify(existingData)
      );
      localStorage.setItem("wakeMoveLastRegistration", JSON.stringify(data));

      console.log("Dados salvos no localStorage:", data);
    } catch (error) {
      console.error("Erro ao salvar no localStorage:", error);
    }
  }

  // 4. Enviar para servidor (quando em produção)
  static async sendToServer(data) {
    if (window.location.hostname === "localhost") {
      console.log("Desenvolvimento - dados não enviados para servidor:", data);
      return;
    }

    try {
      const response = await fetch(
        "https://wakeandmove.com.br/api/analytics.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Dados enviados para servidor com sucesso:", result);
        return result;
      } else {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
    } catch (error) {
      console.error("Erro ao enviar dados para servidor:", error);
      // Fallback: salvar no localStorage se servidor falhar
      this.saveToLocalStorage(data);
    }
  }

  // Integração com Google Analytics
  sendToGoogleAnalytics(data) {
    if (typeof gtag !== "undefined") {
      gtag("event", "form_submit", {
        event_category: "engagement",
        event_label: "wake_move_registration",
        custom_parameters: {
          event_name: data.event,
          user_distance: data.distance,
        },
      });

      gtag("event", "conversion", {
        send_to: "AW-CONVERSION_ID/CONVERSION_LABEL", // Substituir pelos dados reais
        value: 197.0,
        currency: "BRL",
      });
    }
  }

  // Utilitários
  getUrlParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  getOrCreateSessionId() {
    let sessionId = sessionStorage.getItem("wakeMoveSessionId");
    if (!sessionId) {
      sessionId =
        "session_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem("wakeMoveSessionId", sessionId);
    }
    return sessionId;
  }

  // Método para exportar dados (para análise manual)
  exportData() {
    const data = JSON.parse(
      localStorage.getItem("wakeMoveRegistrations") || "[]"
    );
    const csv = this.convertToCSV(data);
    this.downloadCSV(
      csv,
      `wake_move_registrations_${new Date().toISOString().split("T")[0]}.csv`
    );
  }

  convertToCSV(data) {
    if (data.length === 0) return "";

    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(","),
      ...data.map((row) =>
        headers.map((header) => JSON.stringify(row[header] || "")).join(",")
      ),
    ].join("\n");

    return csvContent;
  }

  downloadCSV(csv, filename) {
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");

    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  // Método para limpar dados antigos (manutenção)
  cleanOldData(daysOld = 30) {
    try {
      const data = JSON.parse(
        localStorage.getItem("wakeMoveRegistrations") || "[]"
      );
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - daysOld);

      const recentData = data.filter((item) => {
        const itemDate = new Date(item.timestamp);
        return itemDate > cutoffDate;
      });

      localStorage.setItem("wakeMoveRegistrations", JSON.stringify(recentData));
      console.log(
        `Dados antigos removidos. Mantidos ${recentData.length} registros.`
      );
    } catch (error) {
      console.error("Erro ao limpar dados antigos:", error);
    }
  }
}

// Instância global
window.wakeMoveAnalytics = new WakeMoveAnalytics();

export default WakeMoveAnalytics;
