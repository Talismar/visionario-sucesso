import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#101010] text-gray-300">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-[#c3a540]">
        <Link className="flex items-center justify-center" href="/">
          <BookOpen className="h-6 w-6 text-[#101010]" />
          <span className="ml-2 sm:text-2xl font-bold text-[#101010]">
            Visionário de Sucesso
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-[#101010]"
            href="/"
          >
            Início
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-12 container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-[#c3a540]">
          Política de Privacidade
        </h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#c3a540]">
              1. Coleta de Informações
            </h2>
            <p>
              Coletamos informações quando você se registra em nosso site, faz
              uma compra, inscreve-se em nossa newsletter ou preenche um
              formulário. As informações coletadas incluem seu nome, endereço de
              e-mail, número de telefone e/ou cartão de crédito.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#c3a540]">
              2. Uso das Informações
            </h2>
            <p>Qualquer informação que coletamos pode ser usada para:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Personalizar sua experiência e atender às suas necessidades
                individuais
              </li>
              <li>Fornecer conteúdo publicitário personalizado</li>
              <li>Melhorar nosso site</li>
              <li>
                Melhorar o atendimento ao cliente e suas necessidades de suporte
              </li>
              <li>Entrar em contato através de e-mail</li>
              <li>Administrar um concurso, promoção ou pesquisa</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#c3a540]">
              3. Proteção de Informações
            </h2>
            <p>
              Implementamos uma variedade de medidas de segurança para manter a
              segurança de suas informações pessoais. Usamos criptografia de
              ponta para proteger informações sensíveis transmitidas online.
              Também protegemos suas informações offline.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#c3a540]">
              4. Uso de Cookies
            </h2>
            <p>
              Nosso site usa cookies para melhorar a experiência do usuário. Um
              cookie é um pequeno arquivo que pede permissão para ser colocado
              no disco rígido do seu computador. Você pode escolher aceitar ou
              recusar cookies.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#c3a540]">
              5. Divulgação a Terceiros
            </h2>
            <p>
              Não vendemos, comercializamos ou transferimos para terceiros suas
              informações pessoais identificáveis. Isso não inclui terceiros
              confiáveis que nos auxiliam na operação de nosso site, condução de
              nossos negócios ou atendimento, desde que essas partes concordem
              em manter essas informações confidenciais.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#c3a540]">
              6. Consentimento
            </h2>
            <p>
              Ao usar nosso site, você concorda com nossa política de
              privacidade.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#c3a540]">
              7. Alterações na Política de Privacidade
            </h2>
            <p>
              Se decidirmos mudar nossa política de privacidade, publicaremos
              essas mudanças nesta página.
            </p>
          </section>
        </div>
      </main>
      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#c3a540] mt-12">
        <p className="text-xs text-center text-gray-400">
          © 2024 Visionário de Sucesso. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
