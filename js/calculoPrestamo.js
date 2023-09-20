document.addEventListener("DOMContentLoaded", function () {
    const loanForm = document.getElementById("loan-form");
    const resultsSection = document.getElementById("results");
    const calcularBtn = document.getElementById("calcular-btn");

    calcularBtn.addEventListener("click", function () {
        const monto = parseFloat(document.getElementById('amount').value);
        const cantidadCuotas = parseFloat(document.getElementById('term').value);
        const tasaDeInteres = parseFloat(document.getElementById('interest').value);

        const cuotaFija = calcularCuotas(monto, cantidadCuotas, tasaDeInteres);

        const monthlyPaymentSpan = document.querySelector('#monthly-payment span');
        const totalPaymentSpan = document.querySelector('#total-payment span');
        const totalInterestSpan = document.querySelector('#total-interest span');

        monthlyPaymentSpan.textContent = cuotaFija;
        totalPaymentSpan.textContent = (cuotaFija * cantidadCuotas).toFixed(2);
        totalInterestSpan.textContent = ((cuotaFija * cantidadCuotas) - monto).toFixed(2);

        const loanData = {
            monto,
            cantidadCuotas,
            tasaDeInteres,
            cuotaFija,
        };
        localStorage.setItem("loanData", JSON.stringify(loanData));

        resultsSection.style.display = "block";
    });

    function calcularCuotas(monto, cuotas, tna) {
        const tasaMensual = tna / 12 / 100;
        const cuotaFija = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -cuotas));
        return cuotaFija.toFixed(2);
    }
});
