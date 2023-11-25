import React from 'react';
import './css/main.css'
const Main = () => {
    return (
        <section className="container">
            <div className="first-section gray-background">
                <div className="images-container">
                    <img src="/imgs/paisagem.jpg" alt="Imagem 1" className="main-image"/>
                </div>
                <div className="text-blocks-right">
                    <h2>O que é a solução</h2>
                    <p>Desenvolver um aplicativo médico, um passo audacioso na integração da tecnologia com a gestão da saúde. Nosso objetivo é simplificar o processo de agendamento de consultas médicas, eliminando a necessidade de passar pela recepção do hospital. Queremos proporcionar aos usuários não apenas uma ferramenta funcional, mas uma experiência transformadora que coloca a saúde nas mãos dos pacientes de maneira acessível e eficiente.</p>
                    <p>Destacamos a implementação de medidas rigorosas de segurança e privacidade de dados, garantindo a confiabilidade do aplicativo e a proteção das informações pessoais dos usuários.</p>
                    <p>Esse aplicativo não é apenas uma solução tecnológica; é uma mudança de paradigma na relação entre pacientes e profissionais de saúde, alinhando-se com a evolução tecnológica na área da saúde e colocando o controle da saúde nas mãos daqueles que mais importam: os próprios indivíduos. Além de, ao decorrer de dissertações verificamos que há muitos benefícios com a criação do aplicativo, como:</p>
                    <ul>
                        <li>Economia de Tempo: Os usuários experimentarão uma redução significativa do tempo gasto em filas e na recepção do hospital.</li>
                        <li>Acesso Direto e Rápido: Facilita o acesso direto aos médicos, garantindo consultas de maneira eficiente e desburocratizada.</li>
                        <li>Experiência do Paciente Aprimorada: Oferece conveniência e personalização na gestão de consultas médicas, fortalecendo o papel ativo dos pacientes em sua própria saúde.</li>
                        <li>Eficiência Operacional: Contribui para a eficiência operacional do sistema de saúde, diminuindo a carga de trabalho na recepção e permitindo o redirecionamento de esforços para tarefas mais complexas.</li>
                    </ul>
                    <h2>Funcionalidades</h2>
                    <ul>
                        <li><strong>Agendamento Eficiente:</strong> Implementaremos um sistema intuitivo que permite aos usuários escolherem diretamente o médico desejado, selecionar a data e o horário mais convenientes, otimizando assim o processo de marcação de consultas.</li>
                        <li><strong>Perfil do Paciente:</strong> Os usuários poderão criar perfis personalizados, fornecendo informações essenciais sobre saúde, histórico médico e preferências. Essa abordagem personalizada permite uma melhor compreensão das necessidades individuais.</li>
                        <li><strong>Consulta Virtual:</strong> Reconhecendo a importância da telemedicina, nossa aplicação oferecerá a opção de consultas virtuais para casos em que a presença física não é necessária, garantindo flexibilidade e conveniência aos usuários.</li>
                        <li><strong>Check-in Digital:</strong> Eliminaremos as barreiras tradicionais ao introduzir um sistema de check-in digital, permitindo aos pacientes confirmarem sua presença no horário agendado de maneira rápida e eficiente, sem a necessidade de passar pela recepção.</li>
                        <li><strong>Comunicação Direta:</strong> Facilitaremos a comunicação direta entre paciente e médico, integrando recursos de mensagens. Isso possibilitará o esclarecimento de dúvidas, compartilhamento de informações relevantes antes da consulta e a construção de uma relação mais próxima.</li>
                        <li><strong>Lembretes Automáticos:</strong> Um sistema automatizado enviará lembretes aos usuários sobre consultas agendadas, reduzindo significativamente as taxas de ausências e melhorando a eficiência geral do sistema.</li>
                        <li><strong>Feedback e Avaliação:</strong> Implementaremos um módulo de feedback, permitindo que os usuários avaliem sua experiência. Essa retroalimentação contínua será fundamental para aprimorar o serviço e garantir a qualidade do atendimento.</li>
                        <li><strong>Integração de Pagamentos:</strong> Para oferecer uma solução completa, estamos considerando a integração de um sistema de pagamento opcional para taxas de consulta, proporcionando uma experiência de usuário mais fluida.</li>
                    </ul>
                    <h2>Backlog do Produto</h2>
                    <h3>Cadastro e Autenticação</h3>
                    <ul>
                        <li>Como um novo usuário, eu quero criar uma conta no aplicativo para poder agendar consultas.</li>
                        <li>Como um usuário registrado, eu quero fazer login de forma segura para acessar minha conta.</li>
                    </ul>
                    <h3>Seleção de Médicos e Especialidades</h3>
                    <ul>
                        <li>Como um paciente, eu quero buscar médicos por especialidade para encontrar o profissional adequado para minha necessidade.</li>
                        <li>Como um usuário, eu quero ver a disponibilidade de cada médico para poder escolher uma data e horário conveniente para a consulta.</li>
                    </ul>
                    <h3>Agendamento de Consultas</h3>
                    <ul>
                        <li>Como um paciente, eu quero poder agendar consultas diretamente com o médico escolhido.</li>
                        <li>Como um usuário, eu quero receber uma confirmação imediata do agendamento.</li>
                    </ul>
                    <h3>Calendário de Consultas</h3>
                    <ul>
                        <li>Como um paciente, eu quero visualizar meu calendário de consultas para me manter informado sobre as datas e horários.</li>
                        <li>Como um usuário, eu quero poder cancelar ou reagendar consultas com facilidade.</li>
                    </ul>
                    <h3>Histórico de Consultas</h3>
                    <ul>
                        <li>Como um paciente, eu quero acessar meu histórico de consultas para referência futura.</li>
                        <li>Como um usuário, eu quero receber lembretes automáticos de consultas futuras.</li>
                    </ul>
                    <h3>Sistema de Notificações</h3>
                    <ul>
                        <li>Como um usuário, eu quero receber notificações para lembretes de consultas, confirmações de agendamento e outras atualizações relevantes.</li>
                        <li>Como um paciente, eu quero poder escolher minhas preferências de notificação.</li>
                    </ul>
                    <h3>Sistema de Pagamento</h3>
                    <ul>
                        <li>Como um paciente, eu quero realizar o pagamento da taxa de consulta de forma segura e conveniente.</li>
                        <li>Como um usuário, eu quero receber comprovantes de pagamento e detalhes da transação.</li>
                    </ul>
                    <h3>Chat Integrado</h3>
                    <ul>
                        <li>Como um paciente, eu quero poder enviar mensagens diretamente ao meu médico para esclarecer dúvidas antes da consulta.</li>
                        <li>Como um usuário, eu quero receber notificações de novas mensagens.</li>
                    </ul>
                    <h3>Avaliação e Feedback</h3>
                    <ul>
                        <li>Como um paciente, eu quero poder avaliar o médico após a consulta.</li>
                        <li>Como um usuário, eu quero fornecer feedback para melhorar a qualidade do serviço.</li>
                    </ul>
                </div>
                <div className="text-blocks">
                    <h2 className="small-title">Qual a ideia?</h2>
                    <div className="text-block">
                        Desenvolver um aplicativo médico, um passo audacioso na integração da tecnologia com a gestão da saúde. Nosso objetivo é simplificar o processo de agendamento de consultas médicas, eliminando a necessidade de passar pela recepção do hospital. Queremos proporcionar aos usuários não apenas uma ferramenta funcional, mas uma experiência transformadora que coloca a saúde nas mãos dos pacientes de maneira acessível e eficiente.</div>
                    <button className="info-button">Mais Informações</button>
                </div>
            </div>

            <div className="advantages-section">
                <h2>Vantagens</h2>
                <div class="advantage-container">
                    <div class="advantage">
                        <img src="/imgs/img1.jpg" alt="Vantagem 1"/>
                            <div class="advantage-text">
                                <h3>Histórico Digital de Vacinação</h3>
                                <p>Registre digitalmente suas vacinas ao longo do tempo para um acompanhamento fácil.</p>
                            </div>
                    </div>
                    <div class="advantage">
                        <img src="/imgs/img2.jpg" alt="Vantagem 2"/>
                            <div class="advantage-text">
                                <h3>Lembretes Personalizados</h3>
                                <p>Receba alertas para lembrar das vacinas necessárias com base no seu histórico.</p>
                            </div>
                    </div>
                    <div class="advantage">
                        <img src="/imgs/img3.jpg" alt="Vantagem 3"/>
                            <div class="advantage-text">
                                <h3>Informações Detalhadas</h3>
                                <p>Acesse informações educacionais sobre cada vacina, incluindo benefícios e efeitos colaterais.</p>
                            </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Main;
