// Dados fictícios para o dashboard
const data = {
    totalSales: 150000,
    totalEstablishments: 50,
    averageTicket: 3000,
    insights: [
        "Estabelecimento A teve um aumento de 20% nas vendas.",
        "Estabelecimento B teve uma queda de 10% nas vendas.",
        "Estabelecimento C atingiu a meta de vendas do mês."
    ]
};

// Atualiza os dados no dashboard
document.getElementById('total-sales').textContent = `R$ ${data.totalSales.toLocaleString('pt-BR')}`;
document.getElementById('total-establishments').textContent = data.totalEstablishments;
document.getElementById('average-ticket').textContent = `R$ ${data.averageTicket.toLocaleString('pt-BR')}`;

// Adiciona os insights
const insightsList = document.getElementById('insights-list');
data.insights.forEach(insight => {
    const li = document.createElement('li');
    li.textContent = insight;
    insightsList.appendChild(li);
});
