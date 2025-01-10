function gerarNotaFiscal() {
    const valorVenda = parseFloat(document.getElementById('valorVenda').value);
    const itensVendidos = document.getElementById('itensVendidos').value;
    const irpf = parseFloat(document.getElementById('irpf').value);
    const pis = parseFloat(document.getElementById('pis').value);
    const cofins = parseFloat(document.getElementById('cofins').value);
    const inss = parseFloat(document.getElementById('inss').value);
    const issqn = parseFloat(document.getElementById('issqn').value);

    // Cálculo dos impostos
    const valorIRPF = (irpf / 100) * valorVenda;
    const valorPIS = (pis / 100) * valorVenda;
    const valorCOFINS = (cofins / 100) * valorVenda;
    const valorINSS = (inss / 100) * valorVenda;
    const valorISSQN = (issqn / 100) * valorVenda;
    const totalImpostos = valorIRPF + valorPIS + valorCOFINS + valorINSS + valorISSQN;
    const valorLiquido = valorVenda - totalImpostos;

    // Geração da Nota Fiscal
    const notaFiscalDiv = document.getElementById('notaFiscal');
    notaFiscalDiv.innerHTML = `
        <h2>Nota Fiscal de Serviço</h2>
        <p><strong>Itens Vendidos:</strong> ${itensVendidos}</p>
        <p><strong>Valor da Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
        <p><strong>Impostos Calculados:</strong></p>
        <ul>
            <li>IRPF: R$ ${valorIRPF.toFixed(2)}</li>
            <li>PIS: R$ ${valorPIS.toFixed(2)}</li>
            <li>COFINS: R$ ${valorCOFINS.toFixed(2)}</li>
            <li>INSS: R$ ${valorINSS.toFixed(2)}</li>
            <li>ISSQN: R$ ${valorISSQN.toFixed(2)}</li>
        </ul>
        <p><strong>Total de Impostos:</strong> R$ ${totalImpostos.toFixed(2)}</p>
        <p><strong>Valor Líquido:</strong> R$ ${valorLiquido.toFixed(2)}</p>
    `;
}
