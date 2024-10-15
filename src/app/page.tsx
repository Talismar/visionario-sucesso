import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, CheckCircle, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#c3a540]">
        <div className="max-w-[1488px] flex flex-col sm:flex-row justify-center sm:justify-between items-center px-4 lg:px-6 h-16 mx-auto">
          <Link className="flex items-center justify-center" href="#">
            <BookOpen className="h-6 w-6 text-[#101010]" />
            <span className="ml-2 sm:text-2xl  font-bold text-[#101010]">
              Visionário de Sucesso
            </span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-[#101010]"
              href="#about"
            >
              Sobre
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-[#101010]"
              href="#benefits"
            >
              Benefícios
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-[#101010]"
              href="#cta"
            >
              Comprar
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 xl:py-48 bg-[#101010]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                alt="Ebook Marketing Digital"
                className="mx-auto aspect-[1/1.5] overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="600"
                src="/logo.png"
                width="400"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#c3a540]">
                    Domine o Marketing Digital
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Descubra os segredos para alavancar seu negócio online com o
                    ebook definitivo de Vitoria Nunes.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#c3a540] px-8 text-sm font-medium text-[#101010] shadow transition-colors hover:bg-[#e0b038] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c3a540] disabled:pointer-events-none disabled:opacity-50"
                    href="#cta"
                  >
                    Comprar Agora
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-[#c3a540] bg-[#101010] px-8 text-sm font-medium text-[#c3a540] shadow-sm transition-colors hover:bg-[#c3a540] hover:text-[#101010] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c3a540] disabled:pointer-events-none disabled:opacity-50"
                    href="#benefits"
                  >
                    Saiba Mais
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-[#101010]"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#c3a540]">
                  Conheça Vitoria Nunes
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Especialista em Marketing Digital e autora do ebook
                  {'"Visionário de Sucesso"'}
                </p>
              </div>
            </div>
            <div className="mx-auto grid  items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                alt="Vitoria Nunes"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/logo.png"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#c3a540]">
                        Experiência Comprovada
                      </h3>
                      <p className="text-gray-300">
                        Com mais de 10 anos no mercado, Vitoria já ajudou
                        centenas de empresas a crescerem online.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#c3a540]">
                        Metodologia Única
                      </h3>
                      <p className="text-gray-300">
                        Seu método exclusivo combina estratégias comprovadas com
                        as últimas tendências do mercado.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#c3a540]">
                        Resultados Reais
                      </h3>
                      <p className="text-gray-300">
                        Clientes de Vitoria relatam um aumento médio de 300% em
                        suas vendas online.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section
          id="benefits"
          className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-[#c3a540]"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#101010]">
                  Benefícios do Ebook
                </h2>
                <p className="max-w-[900px] text-[#101010] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubra o que você vai aprender com o{" "}
                  {'"Visionário de Sucesso"'}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {[
                "Estratégias avançadas de SEO",
                "Táticas de marketing de conteúdo",
                "Segredos do tráfego pago",
                "Otimização de conversão",
                "Análise de dados eficiente",
                "Automação de marketing",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 min-h-[90px] rounded-lg border border-[#101010] p-4 bg-[#101010]"
                >
                  <CheckCircle className="h-6 w-6 text-[#c3a540]" />
                  <span className="text-lg font-medium text-[#c3a540]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="cta"
          className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-[#101010]"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-[#c3a540] sm:text-5xl">
                  Pronto para Transformar seu Negócio?
                </h2>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Adquira agora o ebook {'"Visionário de Sucesso"'} e comece sua
                  jornada rumo ao sucesso digital.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2">
                  <Input
                    className="bg-white text-[#101010]"
                    placeholder="Seu melhor e-mail"
                    type="email"
                  />
                  <Button
                    className="bg-[#c3a540] text-[#101010] hover:bg-[#e0b038]"
                    type="button"
                  >
                    Comprar Ebook
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-300">
                  Ao comprar, você concorda com nossos{" "}
                  <Link
                    className="underline underline-offset-2 text-[#c3a540]"
                    href="/politica-privacidade"
                  >
                    Termos de Serviço
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t border-[#c3a540] bg-[#101010]">
        <div className="items-center flex flex-col mx-auto gap-2 sm:flex-row max-w-[1488px]">
          <p className="text-xs text-gray-400">
            © 2024 Visionário de Sucesso. Todos os direitos reservados.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4 text-[#c3a540]"
              href="/politica-privacidade"
            >
              Termos de Serviço
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
