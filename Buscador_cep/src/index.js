const api = axios.create({
    baseURL: "https://viacep.com.br/ws/",
    timeout: 5000, // Tempo limite de 5 segundos
    headers: {
        "Content-Type": "application/json",
    },
});
