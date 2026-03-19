import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export default function Privacidade() {
  return (
    <main className="flex min-h-screen flex-col dark bg-background text-foreground">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-white">Política de Privacidade e Proteção de Dados</h1>
        <p className="text-slate-400 mb-8 font-medium">Versão 1.0 — Vigência a partir de 01 de março de 2026</p>

        <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
          <h2 className="text-2xl font-semibold text-white mt-8">1. Identificação do Controlador de Dados</h2>
          <p>
            A Fast MKT - Serviços de Marketing Ltda. ("Fast MKT", "nós" ou "Empresa"), com sede em Brasília – DF, Brasil, é a controladora dos dados pessoais coletados e tratados no âmbito do uso da Plataforma Fast MKT.
          </p>
          <p>
            Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de seus dados, o Usuário pode entrar em contato pelo e-mail: <strong>dpo@fast-mkt.com</strong>
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">2. Âmbito de Aplicação</h2>
          <p>
            Esta Política de Privacidade (“Política”) descreve como a Fast MKT coleta, utiliza, armazena, compartilha e protege os dados pessoais dos Usuários e Clientes (“Você”) que acessam ou utilizam a Plataforma Fast MKT, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD) e demais normas aplicáveis.
          </p>
          <p>
            Ao criar uma conta, acessar ou utilizar qualquer funcionalidade da Plataforma, você declara ter lido e concordado com esta Política. Ela deve ser lida em conjunto com os Termos de Uso e Condições do Serviço da Fast MKT.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">3. Dados Pessoais Coletados e Finalidades</h2>
          
          <p><strong>3.1. Dados fornecidos diretamente pelo Usuário</strong></p>
          <p>No momento do cadastro e durante a utilização da Plataforma, coletamos os seguintes dados pessoais, com as respectivas finalidades e bases legais:</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full divide-y divide-slate-700 bg-slate-900/50 rounded-lg overflow-hidden border border-slate-700">
              <thead className="bg-[#E64A19]">
                <tr>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Dado Pessoal</th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Finalidade</th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Base Legal (LGPD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-white">Nome completo e e-mail</td>
                  <td className="px-6 py-4 text-sm">Criação e gestão da conta; comunicação sobre pedidos e serviços contratados</td>
                  <td className="px-6 py-4 text-sm">Art. 7º, V – Execução de contrato</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-white">CPF ou CNPJ</td>
                  <td className="px-6 py-4 text-sm">Identificação do titular; emissão de nota fiscal; cumprimento de obrigações fiscais</td>
                  <td className="px-6 py-4 text-sm">Art. 7º, II e V – Obrigação legal e execução de contrato</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-white">Data de nascimento</td>
                  <td className="px-6 py-4 text-sm">Verificação de maioridade civil; personalização do relacionamento com o Cliente</td>
                  <td className="px-6 py-4 text-sm">Art. 7º, I – Consentimento</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-white">Telefone</td>
                  <td className="px-6 py-4 text-sm">Comunicação operacional relacionada aos serviços contratados</td>
                  <td className="px-6 py-4 text-sm">Art. 7º, V – Execução de contrato</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-white">Endereço cadastral e de cobrança</td>
                  <td className="px-6 py-4 text-sm">Cadastro do Cliente; cobrança dos serviços; emissão de nota fiscal</td>
                  <td className="px-6 py-4 text-sm">Art. 7º, II e V – Obrigação legal e execução de contrato</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-white">Dados de navegação e uso da Plataforma</td>
                  <td className="px-6 py-4 text-sm">Melhoria da experiência do usuário; análise de desempenho da Plataforma; segurança</td>
                  <td className="px-6 py-4 text-sm">Art. 7º, IX – Legítimo interesse</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-white">Dados de pagamento (token/referência)</td>
                  <td className="px-6 py-4 text-sm">Processamento e confirmação do pagamento; prevenção a fraudes</td>
                  <td className="px-6 py-4 text-sm">Art. 7º, V – Execução de contrato</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p><strong>3.2. Dados coletados automaticamente</strong></p>
          <p>Ao navegar na Plataforma, podemos coletar automaticamente informações técnicas, tais como:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Endereço IP e dados de localização aproximada;</li>
            <li>Tipo de dispositivo, sistema operacional e navegador utilizado;</li>
            <li>Páginas acessadas, tempo de permanência e interações na Plataforma;</li>
            <li>Identificadores de sessão e cookies (conforme descrito na Seção 9 desta Política).</li>
          </ul>
          <p>Esses dados são tratados com base no legítimo interesse (art. 7º, IX da LGPD) para garantir a segurança da Plataforma, melhorar a experiência do usuário e gerar análises agregadas de desempenho.</p>

          <p><strong>3.3. Dados de terceiros</strong></p>
          <p>Em determinados casos, podemos receber dados pessoais de terceiros, tais como processadores de pagamento, para fins de confirmação e antifraude. Esses dados são tratados exclusivamente para a finalidade para a qual foram recebidos.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">4. Bases Legais para o Tratamento</h2>
          <p>Todo tratamento de dados pessoais realizado pela Fast MKT está amparado em ao menos uma das seguintes bases legais previstas na LGPD:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Execução de contrato ou procedimentos preliminares (art. 7º, V):</strong> para prestação dos serviços contratados e gestão da conta do Usuário;</li>
            <li><strong>Cumprimento de obrigação legal ou regulatória (art. 7º, II):</strong> para emissão de notas fiscais, obrigações tributárias e atendimento a requisições de autoridades competentes;</li>
            <li><strong>Consentimento do titular (art. 7º, I):</strong> para finalidades específicas informadas no momento da coleta, podendo ser revogado a qualquer tempo;</li>
            <li><strong>Legítimo interesse do controlador (art. 7º, IX):</strong> para melhorias da Plataforma, segurança, prevenção a fraudes e comunicações relevantes, desde que não prevaleçam os direitos e liberdades do titular.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8">5. Compartilhamento de Dados</h2>
          <p><strong>5.1. Hipóteses de compartilhamento</strong></p>
          <p>A Fast MKT não vende, aluga ou comercializa dados pessoais de seus Usuários. O compartilhamento ocorre exclusivamente nas seguintes hipóteses:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Prestadores de serviços essenciais:</strong> parceiros que atuam como operadores de dados (processadores de pagamento, provedores de infraestrutura em nuvem, plataformas de e-mail e comunicação), vinculados contratualmente a obrigações de sigilo e segurança equivalentes às adotadas pela Fast MKT;</li>
            <li><strong>Cumprimento de obrigação legal:</strong> autoridades públicas, judiciais ou regulatórias, quando exigido por lei, decisão judicial ou ato de autoridade competente;</li>
            <li><strong>Proteção de direitos:</strong> em caso de investigação, prevenção ou ação contra atividades ilegais, fraudes ou situações que coloquem em risco a segurança de pessoas.</li>
          </ul>

          <p><strong>5.2. Transferência internacional de dados</strong></p>
          <p>Caso dados pessoais sejam transferidos para países ou organizações internacionais, a Fast MKT adotará as salvaguardas adequadas exigidas pela LGPD, como cláusulas contratuais padrão ou certificações reconhecidas pela ANPD, garantindo nível de proteção equivalente ao assegurado pela legislação brasileira.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">6. Prazo de Retenção dos Dados</h2>
          <p>Os dados pessoais serão mantidos pelo tempo necessário para cumprir as finalidades para as quais foram coletados, observando os seguintes critérios:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Dados de cadastro e contratuais:</strong> mantidos durante o período de vigência da relação contratual e por até 5 (cinco) anos após o encerramento, para atender eventuais obrigações legais, fiscais ou judiciais;</li>
            <li><strong>Dados financeiros e fiscais:</strong> mantidos pelo prazo exigido pela legislação tributária brasileira (em geral, 5 anos, podendo ser estendido em caso de litígio);</li>
            <li><strong>Dados tratados com base no consentimento:</strong> mantidos até a revogação do consentimento pelo titular ou até o cumprimento da finalidade que motivou a coleta;</li>
            <li><strong>Dados de navegação e logs:</strong> mantidos por até 6 (seis) meses, salvo requisição judicial ou necessidade de investigação de incidentes de segurança.</li>
          </ul>
          <p>Decorridos os prazos aplicáveis, os dados serão eliminados ou anonimizados, salvo quando a manutenção for necessária para o cumprimento de obrigação legal ou exercício regular de direitos em processo judicial, administrativo ou arbitral.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">7. Direitos do Titular de Dados</h2>
          <p>Nos termos dos arts. 17 a 22 da LGPD, o Usuário possui os seguintes direitos em relação aos seus dados pessoais, que poderão ser exercidos a qualquer tempo:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Confirmação e acesso:</strong> confirmar a existência de tratamento e acessar os dados pessoais tratados;</li>
            <li><strong>Correção:</strong> solicitar a atualização ou retificação de dados incompletos, inexatos ou desatualizados;</li>
            <li><strong>Anonimização, bloqueio ou eliminação:</strong> requerer a anonimização, o bloqueio ou a exclusão de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD;</li>
            <li><strong>Portabilidade:</strong> solicitar a portabilidade dos dados a outro fornecedor de serviço ou produto, respeitados os segredos comerciais e industriais;</li>
            <li><strong>Eliminação após revogação:</strong> requerer a eliminação dos dados tratados com base no consentimento, após sua revogação;</li>
            <li><strong>Informação sobre compartilhamento:</strong> obter informações sobre as entidades com as quais os dados são compartilhados;</li>
            <li><strong>Revogação do consentimento:</strong> revogar o consentimento anteriormente concedido, a qualquer tempo, sem prejuízo dos tratamentos realizados enquanto o consentimento era válido;</li>
            <li><strong>Oposição:</strong> opor-se a tratamentos realizados com base no legítimo interesse, quando este não prevalecer sobre os direitos do titular;</li>
            <li><strong>Petição à ANPD:</strong> peticionar perante a Autoridade Nacional de Proteção de Dados (ANPD) em caso de descumprimento desta Política ou da LGPD.</li>
          </ul>
          <p>Para exercer seus direitos, o Usuário deve entrar em contato pelo e-mail: <strong>dpo@fast-mkt.com</strong>, identificando-se e especificando a solicitação. A Fast MKT responderá no prazo de até 15 (quinze) dias corridos, conforme exigido pela LGPD.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">8. Segurança dos Dados</h2>
          <p>A Fast MKT adota medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acessos não autorizados, perdas, alterações, divulgação indevida ou destruição, incluindo:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Controle de acesso baseado em funções (RBAC), com autenticação segura para colaboradores e sistemas;</li>
            <li>Criptografia em trânsito (TLS) e em repouso para dados sensíveis;</li>
            <li>Monitoramento contínuo de segurança e registros de auditoria (logs);</li>
            <li>Políticas internas de segurança da informação e treinamento periódico de colaboradores;</li>
            <li>Parceiros e fornecedores vinculados a cláusulas contratuais de segurança.</li>
          </ul>
          <p>Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos titulares, a Fast MKT notificará a ANPD e os Usuários afetados no prazo razoável, conforme determina o art. 48 da LGPD, informando a natureza do incidente, os dados afetados, os riscos envolvidos e as medidas adotadas.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">9. Cookies e Tecnologias de Rastreamento</h2>
          <p>A Fast MKT utiliza cookies e tecnologias similares para melhorar a experiência de navegação na Plataforma. Os cookies são pequenos arquivos armazenados no dispositivo do Usuário e classificam-se em:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cookies essenciais:</strong> necessários para o funcionamento básico da Plataforma (autenticação, segurança de sessão). Não podem ser desativados sem comprometer o uso da Plataforma;</li>
            <li><strong>Cookies de desempenho e análise:</strong> coletam informações sobre como os Usuários utilizam a Plataforma, permitindo identificar melhorias. Os dados são anonimizados ou agregados;</li>
            <li><strong>Cookies de funcionalidade:</strong> armazenam preferências do Usuário (idioma, configurações de exibição) para personalizar a experiência.</li>
          </ul>
          <p>O Usuário pode gerenciar ou desativar cookies nas configurações do seu navegador. A desativação de cookies essenciais pode impactar a disponibilidade de funcionalidades da Plataforma.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">10. Dados de Menores de Idade</h2>
          <p>A Plataforma Fast MKT destina-se exclusivamente a pessoas jurídicas ou pessoas físicas maiores de 18 anos com plena capacidade civil, conforme definido nos Termos de Uso. Não coletamos intencionalmente dados pessoais de menores de 18 anos. Caso constatemos que dados de menores foram coletados inadvertidamente, procederemos à exclusão imediata.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">11. Encarregado de Proteção de Dados (DPO)</h2>
          <p>A Fast MKT designa como canal de comunicação para questões relacionadas à proteção de dados:</p>
          <p>
            <strong>Gabriel Pereira – DPO/CDO</strong> - Fast MKT - Serviços de Marketing Ltda.<br/>
            E-mail: dpo@fast-mkt.com<br/>
            Site: fast-mkt.com<br/>
            Endereço: Q SCLRN 705 BLOCO E, S/N – Loja 08 – Asa Norte, Brasília – DF, Brasil
          </p>
          <p>O Encarregado é responsável por: (i) receber comunicações dos titulares sobre dados pessoais; (ii) prestar esclarecimentos e adotar providências; e (iii) comunicar-se com a ANPD.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">12. Alterações desta Política</h2>
          <p>A Fast MKT poderá atualizar esta Política a qualquer tempo. Alterações relevantes serão comunicadas ao Usuário por e-mail ou por aviso na Plataforma com antecedência mínima de 10 (dez) dias, conforme previsto nos Termos de Uso. O uso continuado da Plataforma após a entrada em vigor das alterações constitui aceitação da nova versão da Política.</p>
          <p>O histórico de versões desta Política estará disponível na Plataforma para consulta.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">13. Lei Aplicável e Foro</h2>
          <p>Esta Política é regida pelas leis da República Federativa do Brasil, em especial pela Lei nº 13.709/2018 (LGPD). Fica eleito o foro da Comarca de Brasília/DF para dirimir quaisquer controvérsias decorrentes desta Política, renunciando as partes a qualquer outro, por mais privilegiado que seja.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
