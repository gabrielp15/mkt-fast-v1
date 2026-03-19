import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export default function Termos() {
  return (
    <main className="flex min-h-screen flex-col dark bg-background text-foreground">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-white">Termos de uso e condições do serviço</h1>
        <p className="text-slate-400 mb-8 font-medium">Versão 1.0 — Vigência a partir de 01 de março de 2026</p>
        
        <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
          <h2 className="text-2xl font-semibold text-white mt-8">1. Identificação das Partes e Aceitação</h2>
          <p>
            Estes Termos de Uso e Condições do Serviço (“Termos”) regulam o acesso e a utilização da plataforma Fast MKT (“Plataforma”), de titularidade de Fast MKT - Serviços de Marketing Ltda, com sede no Brasil (“Fast MKT”, “nós” ou “Empresa”).
          </p>
          <p>
            Ao criar uma conta, acessar ou utilizar qualquer funcionalidade da Plataforma, você (“Usuário” ou “Cliente”) declara ter lido, compreendido e concordado integralmente com estes Termos e com nossa Política de Privacidade, que é parte integrante deste instrumento.
          </p>
          <p>
            Caso não concorde com qualquer disposição destes Termos, você deverá abster-se de utilizar a Plataforma.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">2. Objeto e Descrição do Serviço</h2>
          <p>
            <strong>2.1.</strong> A Fast MKT é uma plataforma de marketing como serviço (MaaS) que disponibiliza, sob demanda, a contratação de soluções de marketing digital, incluindo, mas não se limitando a:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Criação de artes e materiais gráficos para redes sociais;</li>
            <li>Redação de copy e produção de textos publicitários;</li>
            <li>Desenvolvimento e implantação de landing pages;</li>
            <li>Criação de sites e lojas virtuais (e-commerce);</li>
            <li>Gestão e produção de conteúdo para redes sociais;</li>
            <li>Outros serviços de marketing digital e processamento de dados disponibilizados na Plataforma.</li>
          </ul>
          <p>
            <strong>2.2.</strong> Os serviços possuem preços fixos exibidos na Plataforma ou estão sujeitos a orçamento personalizado (“serviços personalizados”, “sob medida”), conforme especificado em cada categoria de serviço.
          </p>
          <p>
            <strong>2.3.</strong> O escopo detalhado de cada serviço, incluindo prazos de entrega, formatos de arquivo e número de revisões incluídas, está descrito na página do respectivo serviço no momento da contratação e consolidada na Ordem de criação, documento emitido pela Fast MKT e assinado digitalmente pelo Cliente previamente ao início da execução, conforme disposto na cláusula 8.1.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8">3. Cadastro e Conta de Usuário</h2>
          <p><strong>3.1. Requisitos de Cadastro</strong></p>
          <p>Para utilizar os serviços da Fast MKT, o Usuário deverá criar uma conta fornecendo informações verdadeiras, precisas, atuais e completas. O Usuário é responsável pela manutenção da confidencialidade de suas credenciais de acesso.</p>
          
          <p><strong>3.2. Responsabilidades do Usuário</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Manter seus dados cadastrais atualizados;</li>
            <li>Não compartilhar sua senha com terceiros;</li>
            <li>Notificar imediatamente a Fast MKT sobre qualquer uso não autorizado de sua conta;</li>
            <li>Ser responsável por todas as atividades realizadas em sua conta.</li>
          </ul>

          <p><strong>3.3. Elegibilidade</strong></p>
          <p>A Plataforma destina-se a pessoas jurídicas ou pessoas físicas maiores de 18 anos com capacidade civil plena. Ao se cadastrar, o Usuário declara atender a estes requisitos.</p>

          <p><strong>3.4. Tratamento de Dados no Cadastro</strong></p>
          <p>Os dados pessoais fornecidos no ato do cadastro serão tratados pela Fast MKT com as seguintes bases legais e finalidades, nos termos da Lei nº 13.709/2018 (LGPD):</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nome completo e e-mail — execução de contrato (art. 7º, V): criação e gestão da conta, comunicação sobre pedidos e serviços contratados;</li>
            <li>CPF ou CNPJ — execução de contrato e obrigação legal (art. 7º, II e V): identificação do titular, emissão de nota fiscal e cumprimento de obrigações fiscais;</li>
            <li>Data de nascimento — consentimento (art. 7º, I): verificação de maioridade civil e personalização do relacionamento com o Cliente;</li>
            <li>Telefone — execução de contrato (art. 7º, V): comunicação operacional relacionada aos serviços contratados;</li>
            <li>Endereço (cadastral e de cobrança) — execução de contrato e obrigação legal (art. 7º, II e V): cadastro do Cliente, cobrança dos serviços e emissão de nota fiscal, com campos diferenciados conforme o cadastro seja realizado por CPF (pessoa física) ou CNPJ (pessoa jurídica).</li>
          </ul>
          <p>O tratamento detalhado de dados, os direitos do titular — acesso, correção, exclusão, portabilidade e revogação do consentimento — e o canal de contato com o Encarregado de Dados (DPO) estão descritos na Política de Privacidade, conforme Cláusula 11.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">4. Contratação e Pagamento</h2>
          <p><strong>4.1. Processo de Pedido</strong></p>
          <p>A contratação dos serviços se dá por meio do portal da Fast MKT, mediante seleção do serviço desejado, preenchimento do formulário de briefing e confirmação do pedido com o respectivo pagamento.</p>

          <p><strong>4.2. Preços e Formas de Pagamento</strong></p>
          <p><strong>4.2.1.</strong> Os preços são expressos em Reais (BRL) e podem ser alterados pela Fast MKT a qualquer tempo, sem prejuízo dos pedidos já confirmados.</p>
          <p><strong>4.2.2.</strong> São aceitas as seguintes formas de pagamento: cartão de crédito (parcelamento disponível conforme condições exibidas no checkout), cartão de débito, PIX e boleto bancário.</p>
          <p><strong>4.2.3.</strong> O parcelamento está sujeito a juros para parcelas a partir da 5ª (quinta), conforme tabela vigente exibida no momento da contratação.</p>

          <p><strong>4.3. Confirmação do Pedido</strong></p>
          <p>A execução dos serviços terá início após a confirmação do pagamento pela instituição financeira, independentemente da forma de pagamento escolhida, e condicionada à assinatura digital da Ordem de Criação pelo Cliente, nos termos da Cláusula 8.1. Para pagamentos via boleto bancário, o prazo de entrega é contado a partir da data de compensação.</p>

          <p><strong>4.4. Nota Fiscal</strong></p>
          <p>A Fast MKT emitirá nota fiscal referente a cada serviço contratado, enviando-a ao endereço de e-mail cadastrado pelo Usuário.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">5. Prazo de Entrega e Revisões</h2>
          <p><strong>5.1.</strong> Os prazos de entrega são indicados em cada serviço e contados em dias úteis a partir da confirmação do pagamento e do recebimento do briefing completo pelo Cliente.</p>
          <p><strong>5.2.</strong> O Cliente deverá fornecer todas as informações e materiais necessários à execução do serviço em até 3 (três) dias úteis após a confirmação do pagamento e emissão da Ordem de Criação. O não fornecimento dentro desse prazo suspenderá a contagem do prazo de entrega. Decorridos 7 (sete) dias corridos sem manifestação do Cliente, a Fast MKT poderá cancelar o pedido, retendo o valor correspondente às etapas já executadas e restituindo o saldo proporcional remanescente.</p>
          <p><strong>5.3.</strong> Cada serviço contempla um número de rodadas de revisão especificado em sua descrição. Revisões adicionais poderão ser contratadas separadamente.</p>
          <p><strong>5.4.</strong> Entende-se por revisão a solicitação de ajustes dentro do escopo original do serviço contratado. Alterações de escopo serão tratadas como novo pedido.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">6. Propriedade Intelectual</h2>
          <p><strong>6.1. Direitos sobre os Entregáveis</strong></p>
          <p>Após a quitação integral do pedido e a aprovação final pelo Cliente, os direitos patrimoniais sobre os materiais produzidos exclusivamente para o Cliente são cedidos a este, exceto quando se tratar de licenciamento de elementos de terceiros (fontes, bancos de imagens, plugins, etc.), cujas licenças permanecerão regidas pelas respectivas condições de uso.</p>
          
          <p><strong>6.2. Portfólio</strong></p>
          <p>A Fast MKT reserva-se o direito de utilizar os trabalhos realizados como amostra de portfólio, salvo se o Cliente solicitar expressamente a confidencialidade por escrito antes do início do projeto.</p>
          
          <p><strong>6.3. Propriedade da Plataforma</strong></p>
          <p>Toda a tecnologia, marca, logotipo, interface, conteúdo e demais elementos da Plataforma Fast MKT são de propriedade exclusiva da Empresa, protegidos pelas leis brasileiras de propriedade intelectual.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">7. Confidencialidade</h2>
          <p><strong>7.1. Obrigação de Sigilo</strong></p>
          <p>Ambas as partes comprometem-se a manter sigilo sobre todas as informações confidenciais recebidas no âmbito da prestação dos serviços, incluindo, mas não se limitando a: estratégias de marketing, identidade de marca, posicionamento comercial, dados de campanhas, público-alvo, resultados, materiais de briefing e quaisquer outras informações de natureza estratégica ou comercial.</p>

          <p><strong>7.2. Prazo de Vigência</strong></p>
          <p>A obrigação de confidencialidade permanece vigente por 5 (cinco) anos após o encerramento da relação contratual, independentemente do motivo do encerramento. Para informações que constituam segredo de negócio — assim compreendidas aquelas com valor econômico real ou potencial, cujo titular adote medidas razoáveis para preservar seu sigilo — a proteção é por prazo indeterminado, tendo em vista que a Lei nº 9.279/1996 veda sua divulgação ou exploração não autorizada mesmo após o término do vínculo contratual, nos termos dos arts. 195, XI e XII, sujeitando o infrator à reparação civil prevista no art. 209 da mesma Lei.</p>

          <p><strong>7.3. Exceções</strong></p>
          <p>A obrigação de confidencialidade não se aplica a informações que: (i) sejam ou se tornem públicas sem violação destes Termos; (ii) já fossem de conhecimento legítimo da parte receptora antes do recebimento; (iii) sejam recebidas licitamente de terceiros sem restrição de divulgação; ou (iv) cuja divulgação seja exigida por lei, decisão judicial ou autoridade regulatória competente, hipótese em que a parte notificará a outra com a maior antecedência possível.</p>

          <p><strong>7.4. Aplicação à Equipe</strong></p>
          <p>Cada parte se responsabiliza por garantir que seus colaboradores, prestadores e parceiros que tenham acesso a informações confidenciais estejam vinculados a obrigações de sigilo equivalentes às previstas nesta cláusula.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">8. Política de Cancelamento e Reembolso</h2>
          <p><strong>8.1. Ordem de Criação</strong></p>
          <p>Ao confirmar um pedido, o Cliente receberá a Ordem de Criação — documento digital que formaliza o escopo, o briefing aprovado e autoriza expressamente o início da produção. A assinatura digital da Ordem de Criação, realizada por meio do portal da Fast MKT ou por aceite eletrônico via e-mail, tem plena validade jurídica nos termos do art. 107 do Código Civil e da Medida Provisória nº 2.200-2/2001, e configura consentimento inequívoco para o início imediato dos serviços.</p>

          <p><strong>8.2. Direito de Arrependimento</strong></p>
          <p>O Cliente poderá cancelar o pedido dentro de 7 (sete) dias corridos após a confirmação do pagamento, nos termos do art. 49 do Código de Defesa do Consumidor. Para serviços de natureza personalizada, o reembolso integral somente será devido caso a Ordem de Criação não tenha sido assinada.</p>
          <p>Uma vez assinada a Ordem de Criação e iniciada a execução, o reembolso será proporcional à etapa não executada, deduzidos os custos já incorridos, com fundamento na vedação ao enriquecimento sem causa (art. 884 do Código Civil) e no princípio da boa-fé objetiva (art. 422 do Código Civil).</p>

          <p><strong>8.3. Cancelamento após Assinatura da Ordem de Criação</strong></p>
          <p>Caso o Cliente solicite cancelamento após a assinatura da Ordem de Criação, o reembolso será calculado com base no percentual do serviço ainda não executado, deduzidos os custos diretos incorridos até a data do cancelamento. A Fast MKT apresentará ao Cliente uma memória de cálculo detalhada em até 3 (três) dias úteis.</p>

          <p><strong>8.4. Serviços com Orçamento Personalizado</strong></p>
          <p>Serviços contratados via orçamento customizado ou que exijam aquisição de insumos específicos poderão ter condições de cancelamento diferenciadas, que serão expressamente informadas na respectiva Ordem de Criação antes de sua assinatura.</p>

          <p><strong>8.5. Inconformidade na Entrega</strong></p>
          <p>Caso o entregável não esteja em conformidade com o escopo definido na Ordem de Criação assinada, o Cliente deverá formalizar a reclamação em até 3 (três) dias úteis após o recebimento. A Fast MKT avaliará o caso e poderá optar pela reexecução ou reembolso proporcional.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">9. Obrigações e Responsabilidades do Usuário</h2>
          <p>O Usuário obriga-se a:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fornecer informações verdadeiras, completas e atualizadas no briefing;</li>
            <li>Possuir todos os direitos sobre os materiais, logos, imagens e conteúdos fornecidos à Fast MKT para execução dos serviços;</li>
            <li>Utilizar os serviços contratados em conformidade com a legislação brasileira vigente;</li>
            <li>Não solicitar a produção de materiais ilegais, difamatórios, discriminatórios ou que violem direitos de terceiros;</li>
            <li>Não utilizar a Plataforma para atividades fraudulentas ou que violem direitos de terceiros.</li>
          </ul>
          <p>O Usuário é integralmente responsável pelo conteúdo que fornece e pelo uso final dos materiais entregues pela Fast MKT.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">10. Limitação de Responsabilidade</h2>
          <p><strong>10.1.</strong> Os materiais produzidos pela Fast MKT são criados com dedicação e atenção à identidade do Cliente. No entanto, os resultados de campanhas, conversões e demais métricas de marketing dependem de uma série de fatores externos à nossa atuação — como mercado, investimento em mídia e estratégia comercial — pelos quais não podemos nos responsabilizar.</p>
          <p><strong>10.2.</strong> A Fast MKT se compromete a manter a Plataforma disponível e funcionando da melhor forma possível. Como qualquer serviço digital, podem ocorrer instabilidades pontuais ou interrupções para manutenção — nesses casos, trabalharemos para resolver a situação o mais rápido possível e, sempre que viável, comunicaremos o Cliente com antecedência.</p>
          <p><strong>10.3.</strong> Caso ocorra qualquer problema relacionado a um serviço contratado, a responsabilidade da Fast MKT ficará limitada ao valor pago por aquele serviço específico. Estamos sempre dispostos a encontrar a melhor solução, mas não podemos assumir responsabilidades que ultrapassem o escopo do que foi contratado.</p>
          <p><strong>10.4.</strong> Situações fora do nosso controle — como falhas de infraestrutura de terceiros, eventos de força maior ou caso fortuito — podem eventualmente impactar a prestação dos serviços. Nesses casos, faremos o possível para minimizar os efeitos e manter o Cliente informado, mas não podemos ser responsabilizados por danos indiretos, lucros cessantes ou perda de dados decorrentes dessas situações.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">11. Privacidade e Proteção de Dados</h2>
          <p><strong>11.1.</strong> A Fast MKT coleta, armazena e trata dados pessoais dos Usuários no âmbito da contratação e prestação dos seus serviços, conforme detalhado na Cláusula 3.4 destes Termos. Toda operação de tratamento de dados é realizada em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD), observando os princípios de finalidade, necessidade, transparência e segurança.</p>
          <p><strong>11.2.</strong> Ao aceitar estes Termos, o Usuário declara estar ciente da coleta e do tratamento de seus dados, nas finalidades e bases legais descritas na Cláusula 3.4 e na Política de Privacidade da Fast MKT, disponível na Plataforma.</p>
          <p><strong>11.3.</strong> O Usuário poderá, a qualquer tempo, exercer seus direitos como titular — incluindo acesso, correção, exclusão, portabilidade e revogação do consentimento — por meio do canal de atendimento indicado na Política de Privacidade.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">12. Suspensão e Encerramento da Conta</h2>
          <p><strong>12.1.</strong> A Fast MKT poderá suspender ou encerrar o acesso do Usuário à Plataforma, a seu critério exclusivo, em caso de violação destes Termos, atividade fraudulenta, inadimplência ou qualquer conduta que prejudique a Empresa ou terceiros.</p>
          <p><strong>12.2.</strong> O Usuário poderá encerrar sua conta a qualquer momento, por meio das configurações da Plataforma, o que não implicará no cancelamento de pedidos em andamento ou na exoneração de obrigações pendentes.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">13. Modificações dos Termos</h2>
          <p>A Fast MKT reserva-se o direito de alterar estes Termos a qualquer tempo, mediante notificação ao Usuário por e-mail ou por aviso na Plataforma com antecedência mínima de 10 (dez) dias. O uso continuado da Plataforma após a entrada em vigor das alterações constitui aceitação dos novos Termos.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">14. Disposições Gerais</h2>
          <p><strong>14.1.</strong> Estes Termos constituem o acordo integral entre as partes com relação ao seu objeto e substituem quaisquer entendimentos anteriores.</p>
          <p><strong>14.2.</strong> A eventual tolerância de qualquer descumprimento destes Termos não configura novação ou renúncia de direitos.</p>
          <p><strong>14.3.</strong> Caso alguma disposição destes Termos seja considerada inválida ou inaplicável, as demais disposições permanecerão em plena vigência e eficácia.</p>
          <p><strong>14.4.</strong> Os presentes Termos são regidos pelas leis em vigor na República Federativa do Brasil.</p>

          <h2 className="text-2xl font-semibold text-white mt-8">15. Foro</h2>
          <p>Fica eleito o foro da Comarca de Brasília/DF para dirimir quaisquer controvérsias oriundas destes Termos, renunciando as partes a qualquer outro, por mais privilegiado que seja.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
