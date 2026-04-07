import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const sections = [
  {
    title: '1. Aceitação dos Termos',
    body: `Ao usar o Site, criar uma conta ou fazer um pedido, você reconhece que leu, entendeu e concorda integralmente com estes Termos. Você também declara e garante que possui capacidade legal para celebrar este contrato. Se estiver usando o Site em nome de uma organização, você declara que tem autoridade para vincular essa organização a estes Termos. O uso do Site e a compra de produtos estão expressamente condicionados à aceitação destes Termos sem modificações.`,
  },
  {
    title: '2. Uso exclusivo para pesquisa – Proibido o consumo humano ou animal.',
    body: `Todos os produtos oferecidos e vendidos neste Site destinam-se exclusivamente a uso em laboratório e pesquisa. Eles NÃO são destinados ou aprovados para uso ou consumo humano ou animal sob quaisquer circunstâncias. Isso significa, sem limitação, que nossos produtos químicos, peptídeos e outros materiais não devem ser: ingeridos, injetados, aplicados no corpo, usados como aditivos alimentares, usados como medicamentos ou agentes terapêuticos, usados em produtos cosméticos ou administrados a humanos ou animais de qualquer forma. Não comercializamos nem vendemos nenhum produto para uso medicinal, dietético ou outros usos domésticos. Quaisquer descrições ou informações sobre os produtos são fornecidas exclusivamente para fins de pesquisa. A Empresa não faz nenhuma alegação médica ou terapêutica em relação aos nossos produtos, e eles não se destinam a diagnosticar, tratar, curar ou prevenir qualquer doença ou condição médica.

É estritamente proibido aos compradores e usuários destes produtos utilizá-los de qualquer forma que não seja compatível com sua designação como substâncias químicas para pesquisa. Qualquer uso indevido dos produtos, incluindo o uso para fins humanos ou veterinários, constitui uma violação grave destes Termos. Você concorda em não questionar ou solicitar informações sobre dosagem ou consumo de qualquer produto em humanos ou animais. A Empresa não responderá a tais questionamentos e poderá cancelar seu acesso caso o faça.`,
  },
  {
    title: '3. Vendas proibidas em Hong Kong (Restrição Territorial)',
    body: `A Empresa não oferece, vende ou envia nenhum de seus produtos para qualquer pessoa ou endereço em Hong Kong. Nossos produtos destinam-se exclusivamente a clientes internacionais e não se destinam à distribuição ou uso em Hong Kong. Ao fazer um pedido, você declara e garante que não está localizado em Hong Kong e que não está adquirindo nossos produtos para uso, revenda ou qualquer outra finalidade em Hong Kong. Qualquer pedido que pareça ter origem em Hong Kong ou que solicite envio para Hong Kong será recusado ou cancelado. Essa restrição territorial visa garantir a conformidade com as leis e regulamentos de Hong Kong. Nada nestes Termos deve ser interpretado como uma oferta para vender ou distribuir produtos em Hong Kong, nem como permissão para violar qualquer lei local.`,
  },
  {
    title: '4. Elegibilidade e Requisitos de Idade',
    body: `O uso do Site e a compra de produtos são restritos a indivíduos com pelo menos vinte e um (21) anos de idade. Ao acessar o Site ou encomendar produtos, você afirma ter 21 anos de idade ou mais. O Site não se destina a menores de idade, e a Empresa não venderá intencionalmente nem celebrará contratos com indivíduos menores de 21 anos. Se você for menor de 21 anos, deverá sair do Site imediatamente e está estritamente proibido de fazer qualquer pedido.

Além disso, os produtos deste Site destinam-se ao uso por indivíduos ou entidades (como laboratórios de pesquisa, universidades ou empresas) qualificados e competentes para manusear produtos químicos de pesquisa. Ao comprar, você certifica que está devidamente qualificado (por meio de educação, treinamento ou experiência) para manusear e usar esses materiais com segurança em um ambiente de pesquisa. A Empresa reserva-se o direito de exigir comprovação de idade ou qualificações a qualquer momento e de recusar o serviço caso tal comprovação não possa ser fornecida.`,
  },
  {
    title: '5. Conformidade com leis e regulamentos',
    body: `Ao fazer um pedido neste Site, você declara e garante que sua compra, importação, posse e uso dos produtos estarão em conformidade com todas as leis, regulamentos e normas aplicáveis em seu país ou região. Produtos químicos e peptídeos para pesquisa podem estar sujeitos a diversas regulamentações nacionais ou internacionais (como controles de importação/exportação, regulamentações sobre substâncias químicas ou leis de saúde e segurança). Você é o único responsável por compreender e cumprir as leis de sua jurisdição referentes a esses produtos. Isso inclui (mas não se limita a) garantir que:

• Importação/Exportação: Os produtos podem ser legalmente importados para o seu país. Você obteve todas as autorizações, licenças ou aprovações de importação necessárias exigidas pelas autoridades alfandegárias ou regulatórias antes de fazer o pedido.

• Substâncias Controladas: Os produtos não são classificados como substâncias controladas, restritas ou proibidas em sua localidade, ou, caso sejam, você possui as licenças ou isenções apropriadas para manuseá-los legalmente.

• Regulamentos de Utilização: Você utilizará os produtos somente de forma lícita e em conformidade com todas as diretrizes ou regulamentações pertinentes (por exemplo, regulamentos de uso em laboratório, normas de manuseio de produtos químicos ou diretrizes éticas para pesquisa). Você não utilizará os produtos para criar qualquer substância ilegal ou para qualquer experimentação ilegal.

• Proibição de Desvio: Você não desviará, revenderá ou fornecerá os produtos a terceiros que possam utilizá-los em violação destes Termos ou de qualquer lei. Você concorda que é o usuário final dos produtos exclusivamente para fins de pesquisa.

O Cliente assume total responsabilidade legal pelo envio e uso dos produtos assim que forem despachados pela Empresa. A Empresa não será responsável por quaisquer perdas ou consequências legais decorrentes do descumprimento, por parte do Cliente, das leis locais. Reservamo-nos o direito de limitar ou recusar a venda de determinados produtos a jurisdições específicas, caso tenhamos conhecimento de restrições legais ou qualquer preocupação com a conformidade regulatória. A Empresa também se reserva o direito de solicitar documentação ou certificações adicionais ao Cliente antes de processar um pedido, para garantir a conformidade com as leis aplicáveis.`,
  },
  {
    title: '6. Manuseio e uso seguros dos produtos',
    body: `Ao adquirir nossos produtos, você concorda que possui o conhecimento, as habilidades e as instalações necessárias para manusear e usar esses produtos químicos de pesquisa com segurança. Você reconhece que esses produtos podem apresentar riscos se usados incorretamente e assume total responsabilidade por garantir o manuseio, o armazenamento e o uso seguros. Especificamente, você concorda em:

• Siga os protocolos de segurança: Manuseie todos os produtos de acordo com as práticas laboratoriais prudentes e quaisquer instruções ou diretrizes de segurança fornecidas pela empresa. Utilize os equipamentos de proteção individual adequados (como luvas, óculos de proteção e jalecos) e os controles de engenharia (como capelas de exaustão) conforme necessário ao manusear produtos químicos.

• Analise as Fichas de Dados de Segurança: Analise cuidadosamente todas as Fichas de Dados de Segurança (FDS) ou informações de segurança fornecidas com o produto (ou disponíveis mediante solicitação) antes de utilizá-lo. Familiarize-se com as propriedades químicas, os riscos e as medidas de primeiros socorros associadas a cada produto.

• Armazenamento e descarte adequados: Armazene os produtos em local seguro e em condições apropriadas (temperatura correta, fora do alcance de pessoas não autorizadas, etc.) e descarte quaisquer resíduos de acordo com as normas ambientais e de segurança aplicáveis. Você deverá garantir que somente pessoal autorizado e devidamente treinado tenha acesso aos produtos.

• Uso exclusivo em pesquisa: Utilize os produtos exclusivamente para pesquisa laboratorial legítima. É proibido o uso destes produtos em seres humanos ou animais, bem como para qualquer finalidade que não seja de pesquisa. Também é proibido incorporá-los em produtos que possam ser utilizados por seres humanos ou animais. Qualquer uso dos produtos fora de um ambiente de pesquisa controlado ou contrário às diretrizes fornecidas é estritamente proibido.

Você compreende e reconhece que os produtos não foram esterilizados nem testados pela Empresa quanto à segurança ou eficácia para uso em alimentos, medicamentos, produtos médicos, cosméticos ou qualquer outro fim. Eles podem conter substâncias químicas nocivas se manuseadas incorretamente. É de sua responsabilidade realizar todos os testes necessários e manusear os materiais de maneira compatível com a finalidade de pesquisa para a qual foram concebidos. Quaisquer lesões, danos ou perdas resultantes do manuseio incorreto ou uso indevido são de sua inteira responsabilidade (consulte as Seções 9 e 10 sobre Limitação de Responsabilidade e Indenização).`,
  },
  {
    title: '7. Recusa de Ordem e Cessação de Acesso',
    body: `A Empresa reserva-se o direito de recusar, restringir ou cancelar qualquer pedido ou acesso ao Site a qualquer momento, a seu exclusivo critério e por qualquer motivo. Isso inclui, mas não se limita a, situações em que suspeitamos que um cliente ou pedido possa estar violando estes Termos, qualquer lei ou regulamento, ou possa representar um risco de uso indevido dos produtos. Também podemos recusar o serviço se as informações fornecidas pelo Cliente forem inverificáveis ou se tivermos motivos para acreditar que o pedido é fraudulento ou inadequado.

Caso cancelemos um pedido nessas circunstâncias, faremos todos os esforços razoáveis para notificá-lo usando as informações de contato fornecidas e reembolsaremos qualquer pagamento recebido pelo pedido cancelado (a menos que o cancelamento seja devido a atividade ilegal por parte do Cliente). A Empresa não terá qualquer responsabilidade perante você ou terceiros pela recusa ou cancelamento de um pedido, encerramento da sua conta ou bloqueio do seu acesso ao Site como resultado de uma violação ou suspeita de violação destes Termos. Reservamo-nos também o direito de banir permanentemente ou encerrar a conta de qualquer Usuário que viole estes Termos ou que suspeitemos que pretenda usar nossos produtos de maneira contrária aos nossos Termos ou à legislação aplicável.`,
  },
  {
    title: '8. Isenção de Garantia',
    body: `Todos os produtos e serviços fornecidos pela Empresa são oferecidos "NO ESTADO EM QUE SE ENCONTRAM" e "COM TODOS OS DEFEITOS", sem quaisquer garantias, expressas ou implícitas. Na máxima extensão permitida por lei, a Empresa se isenta de todas as garantias de qualquer natureza, expressas ou implícitas, incluindo, entre outras, garantias implícitas de comercialização, adequação a uma finalidade específica, titularidade e não violação de direitos. Não garantimos que os produtos terão qualquer grau ou pureza específica (além do que está declarado nos rótulos dos produtos) ou que serão adequados para sua aplicação de pesquisa específica. Você assume toda a responsabilidade por determinar a adequação dos produtos para o uso pretendido.

Além disso, embora a Empresa se esforce para fornecer informações precisas e atualizadas no Site, não garantimos que o Site ou qualquer conteúdo (incluindo descrições de produtos, especificações ou outras informações) seja preciso, completo, confiável, atual ou livre de erros. A Empresa não garante acesso ininterrupto ou seguro ao Site, e a operação do Site pode estar sujeita a interferências de diversos fatores fora do nosso controle. Você compreende que qualquer conselho ou informação (científica, técnica ou de qualquer outra natureza) obtida da Empresa ou do Site, seja oral ou escrita, não constitui qualquer garantia ou declaração e é utilizada exclusivamente por sua conta e risco.

Salvo disposição expressa em contrário por escrito, nenhum conselho, recomendação ou informação fornecida pela Empresa, seus funcionários ou agentes criará qualquer garantia. A Empresa não garante que os produtos alcançarão quaisquer resultados específicos em pesquisas ou que estejam isentos de defeitos. Todas as garantias são expressamente excluídas na máxima extensão permitida por lei.`,
  },
  {
    title: '9. Limitação de Responsabilidade',
    body: `Na máxima extensão permitida pela legislação aplicável, em hipótese alguma a Empresa ou seus proprietários, diretores, funcionários, agentes, fornecedores ou afiliados serão responsáveis por quaisquer danos ou prejuízos decorrentes ou relacionados ao seu uso do Site ou à compra/uso de nossos produtos. Esta limitação de responsabilidade aplica-se a todos os tipos de reclamações e danos, sejam eles diretos, indiretos, incidentais, consequenciais, especiais, exemplares ou punitivos. Isso inclui, sem limitação: qualquer lesão pessoal, doença ou dano (incluindo morte); qualquer dano à propriedade; qualquer perda de lucros, perda de receita, perda de dados ou interrupção de negócios; e qualquer responsabilidade perante terceiros, mesmo que a Empresa tenha sido avisada da possibilidade de tais danos. A Empresa não será responsável por quaisquer danos resultantes do uso indevido dos produtos, manuseio inadequado ou uso dos produtos em violação destes Termos (como consumo humano ou qualquer uso ilegal). Você assume todos os riscos associados aos produtos no momento da compra e é responsável por todas as consequências decorrentes de seu uso.

Em jurisdições que não permitem a exclusão ou limitação de certos danos, a responsabilidade da Empresa será limitada ao máximo permitido por lei. Em qualquer caso, a responsabilidade total da Empresa por qualquer reclamação decorrente ou relacionada a estes Termos ou aos produtos não excederá o valor efetivamente pago por você à Empresa pelo(s) produto(s) específico(s) que deram origem à reclamação. Esta limitação é cumulativa e não será aumentada pela existência de mais de um incidente ou reclamação. Você concorda que esta limitação de responsabilidade é razoável e constitui um fator essencial na decisão da Empresa de lhe oferecer produtos.`,
  },
  {
    title: '10. Indenização',
    body: `Você concorda em indenizar, defender e isentar a Empresa e sua controladora, subsidiárias, afiliadas e seus respectivos diretores, funcionários e agentes (coletivamente, as "Partes Indenizadas") de quaisquer reivindicações, responsabilidades, perdas, danos, julgamentos, indenizações, multas, penalidades, custos ou despesas (incluindo honorários advocatícios razoáveis) que surjam ou estejam relacionados a (a) seu uso ou uso indevido do Site ou de quaisquer produtos adquiridos no Site; (b) sua violação destes Termos ou de qualquer lei ou regulamento aplicável; (c) sua negligência, conduta dolosa ou violação de quaisquer direitos de terceiros; ou (d) qualquer uso dos produtos por você ou em seu nome (incluindo o uso por seus funcionários, colegas ou agentes) que não esteja em estrita conformidade com estes Termos.

Isso significa que, se qualquer terceiro apresentar uma reclamação contra a Empresa (ou outras Partes Indenizadas) em decorrência de algo que você fez, deixou de fazer ou utilizou indevidamente em relação aos produtos ou ao Site, você será responsável por todos os custos e danos que as Partes Indenizadas sofrerem em decorrência dessa reclamação. A Empresa reserva-se o direito de assumir a defesa e o controle exclusivos de qualquer assunto que, de outra forma, esteja sujeito à sua indenização (às suas custas), caso em que você concorda em cooperar integralmente com a Empresa na apresentação de quaisquer defesas disponíveis. Você não poderá celebrar qualquer acordo que afete as Partes Indenizadas sem o consentimento prévio e por escrito da Empresa.`,
  },
  {
    title: '11. Direitos de Propriedade Intelectual',
    body: `Todo o conteúdo e materiais do Site são propriedade intelectual da Empresa ou de seus fornecedores de conteúdo e estão protegidos por direitos autorais, marcas registradas e outras leis de propriedade intelectual. Isso inclui, entre outros, o design do site, textos, gráficos, logotipos, ícones de botões, imagens, listas e descrições de produtos, compilações de dados, software e a compilação e organização dos mesmos. O nome da Empresa, seu logotipo e todos os nomes de produtos e serviços relacionados são marcas registradas/marcas de serviço de propriedade da Empresa (ou de seus licenciadores) e não podem ser usados ou reproduzidos sem nossa prévia autorização por escrito.

Uso Autorizado: A Empresa concede a você uma licença limitada, revogável e intransferível para acessar e utilizar o Site para uso pessoal, exclusivamente para fins de pesquisa e para conhecer e encomendar nossos produtos. Nenhum outro uso do conteúdo ou do Site é autorizado. Uso Proibido: Você não deve reproduzir, distribuir, modificar, criar obras derivadas, exibir publicamente, executar publicamente, republicar, baixar ou transmitir qualquer material do nosso Site sem a prévia autorização expressa e por escrito da Empresa. Você também não pode usar meta tags ou qualquer outro "texto oculto" que utilize o nome ou as marcas registradas da Empresa sem o nosso consentimento explícito.

A venda de produtos a você não lhe concede nenhuma licença ou direito sobre quaisquer patentes, invenções ou outros direitos de propriedade intelectual que protejam ou estejam relacionados a esses produtos, além do direito de usar a quantidade adquirida do produto para pesquisa lícita. A listagem ou disponibilidade de um material neste Site não deve ser interpretada como uma licença para usar esse material de qualquer forma que infrinja os direitos de patente ou de propriedade intelectual de terceiros. Você é responsável por garantir que o uso específico de qualquer produto não viole nenhuma patente, marca registrada ou outros direitos de propriedade intelectual.

Qualquer feedback, sugestão ou ideia que você fornecer à Empresa em relação ao Site ou aos produtos será considerado não confidencial e não proprietário. A Empresa poderá usar esse feedback ou sugestão livremente, sem qualquer compensação ou atribuição a você, e você cede irrevogavelmente à Empresa todos os direitos de propriedade intelectual relativos a esse feedback.`,
  },
  {
    title: '12. Utilização do site e rastreamento de dados',
    body: `Uso Aceitável: Você concorda em usar este Site apenas para fins lícitos e de acordo com estes Termos. Você é responsável por toda a sua atividade no Site. Você concorda em não usar o Site de forma indevida ou abusiva, incluindo, entre outros: tentar obter acesso não autorizado a qualquer parte do Site ou de seus servidores; usar o Site de maneira que possa danificar, desabilitar, sobrecarregar ou prejudicar nossos sistemas ou segurança; implantar qualquer sistema automatizado (por exemplo, robôs ou scripts) para extrair dados do Site (raspagem de dados) sem nossa permissão; introduzir vírus, cavalos de Troia, worms ou qualquer outro material malicioso ou prejudicial; ou tentar interferir no funcionamento adequado do Site (incluindo qualquer processo de compra). Reservamo-nos o direito de monitorar o Site para fins de segurança e conformidade e de tomar as medidas cabíveis (como suspensão ou banimento de contas) para proteger o Site e fazer cumprir estes Termos.

Contas de Usuário: Caso o Site exija que você crie uma conta ou forneça informações, você concorda em fornecer informações verdadeiras, precisas, atuais e completas. Você é responsável por manter a confidencialidade das suas credenciais de acesso e por qualquer atividade que ocorra em sua conta. Você concorda em notificar imediatamente a Empresa sobre qualquer uso não autorizado da sua conta ou qualquer outra violação de segurança. A Empresa não será responsabilizada por qualquer perda ou dano decorrente da sua falha em manter as informações da sua conta em segurança.

Privacidade e Rastreamento de Dados: A Empresa respeita a sua privacidade. Ao utilizar o Site, você reconhece e concorda que a Empresa pode coletar, usar e divulgar certas informações sobre você, conforme descrito em nossa Política de Privacidade (se disponível) e conforme necessário para processar seus pedidos ou aprimorar nossos serviços. O Site pode usar cookies, pixels de rastreamento e tecnologias semelhantes para melhorar a experiência do usuário, analisar o tráfego e para fins de autenticação e segurança. Ao usar o Site, você concorda com o uso de cookies e tecnologias de rastreamento. Você pode ajustar as configurações do seu navegador para recusar cookies, mas algumas partes do Site podem não funcionar corretamente se você fizer isso. A Empresa não vende dados pessoais a terceiros e implementamos medidas de segurança razoáveis para proteger suas informações. Para obter informações detalhadas sobre como lidamos com os dados do usuário, consulte nossa Política de Privacidade (se disponível separadamente).

Modificação do Conteúdo: A Empresa se esforça para manter as informações no Site precisas e atualizadas, mas reserva-se o direito de corrigir quaisquer erros ou omissões no conteúdo do Site e de alterar ou atualizar as informações a qualquer momento, sem aviso prévio. Isso inclui preços, disponibilidade de produtos, descrições e outras informações. Caso um produto seja listado com preço incorreto ou com detalhes incorretos devido a um erro, reservamo-nos o direito de recusar ou cancelar quaisquer pedidos feitos para esse produto (mesmo que o pedido tenha sido confirmado e o pagamento processado). Se o pagamento de um pedido cancelado já tiver sido efetuado, reembolsaremos o valor pago. A Empresa não se responsabiliza por erros honestos ou erros tipográficos no Site.`,
  },
  {
    title: '13. Modificações no Site e nos Termos',
    body: `A Empresa reserva-se o direito de modificar, atualizar ou descontinuar qualquer parte do Site ou dos produtos oferecidos a qualquer momento, sem qualquer responsabilidade e sem aviso prévio. Podemos adicionar, remover ou alterar funcionalidades ou recursos do Site, ou descontinuá-lo completamente, a nosso critério. Quaisquer novos recursos ou ferramentas adicionados ao Site também estão sujeitos a estes Termos.

Da mesma forma, a Empresa poderá alterar ou atualizar estes Termos periodicamente. Quaisquer alterações entrarão em vigor assim que os Termos revisados forem publicados nesta página (a menos que uma data de vigência posterior seja especificada). É sua responsabilidade revisar estes Termos periodicamente para verificar atualizações. Indicaremos a data da "Última Atualização" na parte superior dos Termos para sua referência. Ao continuar a usar o Site ou comprar produtos após a publicação de quaisquer modificações nos Termos, você concorda com os Termos revisados. Caso não concorde com os Termos atualizados, você deverá interromper o uso do Site e (se aplicável) cancelar sua conta ou pedidos pendentes. Nenhuma alteração destes Termos feita por você será vinculativa, a menos que seja acordada por escrito e assinada por um representante autorizado da Empresa.`,
  },
  {
    title: '14. Lei aplicável e jurisdição',
    body: `Este Aviso Legal e Termos de Uso, bem como qualquer disputa ou reclamação decorrente ou relacionada a ele ou a qualquer compra de produtos no Site, serão regidos e interpretados de acordo com as leis da Região Administrativa Especial de Hong Kong (RAEHK), sem levar em consideração seus princípios de conflito de leis. Os direitos e obrigações das partes não serão regidos pela Convenção das Nações Unidas sobre Contratos de Compra e Venda Internacional de Mercadorias (CISG); sua aplicação é expressamente excluída.

Como a Empresa não realiza vendas em Hong Kong (ver Seção 3 acima), estes Termos e quaisquer transações decorrentes do Site são consideradas vendas internacionais originadas em Hong Kong. Você reconhece e concorda que qualquer disputa, controvérsia ou reclamação decorrente ou relacionada a estes Termos, ao Site ou a qualquer produto vendido pela Empresa (uma "Disputa") estará sujeita à jurisdição exclusiva dos tribunais de Hong Kong. Você consente com a jurisdição pessoal de tais tribunais e renuncia a quaisquer objeções a tal jurisdição ou foro, inclusive com base no princípio do forum non conveniens. Não obstante o exposto, a Empresa reserva-se o direito de buscar medidas cautelares ou equitativas em qualquer tribunal de jurisdição competente para impedir a violação efetiva ou iminente de sua propriedade intelectual ou outros direitos.

Você concorda que qualquer Disputa será conduzida individualmente, e não coletivamente, e que nenhum processo será unido a outro, sendo proibidas ações coletivas. Você concorda ainda que, na medida permitida por lei, qualquer Disputa deverá ser ajuizada dentro de um (1) ano após o surgimento da causa, sob pena de prescrição.`,
  },
  {
    title: '15. Diversos',
    body: `• Divisibilidade: Se qualquer disposição destes Termos for considerada inválida, ilegal ou inexequível por um tribunal de jurisdição competente, tal disposição será considerada modificada na medida mínima necessária para torná-la exequível (se possível) ou excluída destes Termos, se não for possível. A invalidade de uma disposição não afetará a validade e a exequibilidade das demais disposições, que permanecerão em pleno vigor e efeito.

• Não Renúncia: A omissão ou demora da Empresa em exercer qualquer direito, poder ou recurso previsto nestes Termos não constituirá renúncia a esse ou a qualquer outro direito, poder ou recurso. Da mesma forma, o exercício parcial ou isolado de um direito, poder ou recurso não impede o exercício posterior do mesmo ou de qualquer outro direito, poder ou recurso. A renúncia, por parte da Empresa, a qualquer disposição ou violação destes Termos em uma ocasião não constituirá renúncia a qualquer outra disposição ou a qualquer violação futura. Todas as renúncias devem ser feitas por escrito para serem válidas.

• Acordo Integral: Estes Termos (incluindo quaisquer documentos, políticas ou termos expressamente mencionados aqui, como nossa Política de Privacidade ou quaisquer condições adicionais no Site) constituem o acordo integral entre você e a Empresa com relação ao uso do Site e à compra dos produtos. Eles substituem todos os acordos, entendimentos, negociações e comunicações anteriores ou contemporâneos, sejam escritos ou verbais, relativos ao mesmo assunto. Você reconhece que não se baseou em nenhuma declaração, garantia ou acordo que não esteja expressamente contido nestes Termos ao decidir concordar com eles.

• Cessão: Você não poderá ceder ou transferir quaisquer de seus direitos ou obrigações sob estes Termos sem o consentimento prévio e por escrito da Empresa. A Empresa poderá ceder ou transferir seus direitos e obrigações sob estes Termos para uma afiliada ou em conexão com uma fusão, aquisição ou venda de ativos, ou por força de lei, e você, por meio deste instrumento, consente com qualquer cessão desse tipo. Estes Termos serão aplicáveis em benefício e vinculativos para os sucessores e cessionários permitidos de cada parte.

• Títulos: Os títulos e cabeçalhos das seções nestes Termos são apenas para conveniência e não têm efeito legal ou contratual.

• Vigência: Quaisquer disposições destes Termos que, por sua natureza, devam sobreviver ao término do seu uso do Site ou de qualquer compra (incluindo, entre outras, isenções de garantia, limitações de responsabilidade, indenização, lei aplicável e jurisdição) permanecerão em vigor após qualquer rescisão ou expiração destes Termos e/ou do seu relacionamento com a Empresa.

Caso tenha alguma dúvida ou preocupação sobre estes Termos ou qualquer aspecto da sua interação com a Empresa, entre em contato conosco pelo endereço de e-mail [Contact Email/Address]. Ao usar o Site ou comprar nossos produtos, você reconhece que leu, entendeu e concordou com este Aviso Legal e Termos de Uso. Agradecemos por respeitar estes Termos e por realizar pesquisas responsáveis. Agradecemos sua preferência e cooperação.`,
  },
];

const PaymentDeliveryPage = () => {
  return (
    <div style={{ padding: '120px 0 80px', minHeight: '100vh', backgroundColor: '#050505' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--neon)', fontWeight: 700, marginBottom: '2rem' }}>
          <ChevronLeft size={20} /> VOLTAR À LOJA
        </Link>

        <h1 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
          Pagamento e <span className="text-neon">entrega</span>
        </h1>

        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: 700 }}>
          POR FAVOR, LEIA ESTE DOCUMENTO COM ATENÇÃO. Ao acessar ou usar este website (o "Site") e ao adquirir quaisquer produtos nele, você (o "Usuário" ou "Cliente") concorda em ficar vinculado ao seguinte Aviso Legal e Termos de Uso (os "Termos"). Estes Termos constituem um acordo legal entre você e o proprietário/operador do Site (a "Empresa"), uma empresa sediada em Hong Kong. Caso não concorde com qualquer parte destes Termos, não utilize este Site nem adquira nossos produtos.
        </p>

        {sections.map((s) => (
          <section key={s.title} style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'white' }}>{s.title}</h2>
            {s.body.split('\n\n').map((p, i) => (
              <p key={i} style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem', whiteSpace: 'pre-line' }}>
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default PaymentDeliveryPage;
