"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BookOpen,
  CheckCircle,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 2.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};
export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <motion.header
        className="px-4 lg:px-6 py-4 bg-gradient-to-r from-[#101010] to-[#2a2a2a] border-b border-[#c3a540]/20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <BookOpen className="h-8 w-8 text-[#c3a540]" />
            <span className="ml-2 sm:text-sm lg:text-2xl font-bold tracking-wider text-[#c3a540]">
              VISIONÁRIO DE SUCESSO
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {["Sobre", "Benefícios", "Preview", "Comprar"].map(
              (item, index) => (
                <Link
                  key={index}
                  className="text-sm font-medium text-gray-200 hover:text-[#c3a540] transition-colors duration-200"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </Link>
              )
            )}
          </nav>
          <Button className="hidden md:inline-flex bg-[#c3a540] text-[#101010] hover:bg-[#d4b655] transition-colors duration-200">
            Compre Agora
          </Button>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#101010] border-b border-[#c3a540]/20"
          >
            <nav className="flex flex-col items-center py-4">
              {["Sobre", "Benefícios", "Preview", "Comprar"].map(
                (item, index) => (
                  <Link
                    key={index}
                    className="text-sm font-medium text-gray-200 hover:text-[#c3a540] transition-colors duration-200 py-2"
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                )
              )}
              <Button
                className="mt-4 bg-[#c3a540] text-[#101010] hover:bg-[#d4b655] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Compre Agora
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-[#101010]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                className="flex flex-col justify-center space-y-4 pb-8 sm:pb-24"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
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
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  alt="Ebook Marketing Digital"
                  className="mx-auto overflow-hidden rounded-xl object-contain object-center sm:w-full lg:order-last"
                  src="/logo.png"
                  width="400"
                  height="600"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section
          id="sobre"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#101010]"
        >
          <motion.div
            className="container px-4 md:px-6 mx-auto"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="flex flex-col items-center justify-between space-y-4 text-center"
              variants={fadeIn}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#c3a540]">
                  Conheça Vitoria Nunes
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Especialista em Marketing Digital e autora do ebook
                  {'"Visionário de Sucesso"'}
                </p>
              </div>
            </motion.div>
            <div className="mx-auto grid items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <motion.div variants={fadeIn}>
                <Image
                  alt="Vitoria Nunes"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full lg:order-last"
                  height="310"
                  src="/logo.png"
                  width="550"
                />
              </motion.div>
              <motion.div
                className="flex flex-col justify-center space-y-4"
                variants={staggerChildren}
              >
                <ul className="grid gap-6">
                  {[
                    {
                      title: "Experiência Comprovada",
                      description:
                        "Com mais de 10 anos no mercado, Vitoria já ajudou centenas de empresas a crescerem online.",
                    },
                    {
                      title: "Metodologia Única",
                      description:
                        "Seu método exclusivo combina estratégias comprovadas com as últimas tendências do mercado.",
                    },
                    {
                      title: "Resultados Reais",
                      description:
                        "Clientes de Vitoria relatam um aumento médio de 300% em suas vendas online.",
                    },
                  ].map((item, index) => (
                    <motion.li key={index} variants={fadeIn}>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold text-[#c3a540]">
                          {item.title}
                        </h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section
          id="benefícios"
          className="w-full flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 bg-[#c3a540]"
        >
          <motion.div
            className="container px-4 md:px-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              variants={fadeIn}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#101010]">
                  Benefícios do Ebook
                </h2>
                <p className="max-w-[900px] text-[#101010] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubra o que você vai aprender com o{" "}
                  {'"Visionário de Sucesso"'}
                </p>
              </div>
            </motion.div>
            <motion.div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3"
              variants={staggerChildren}
            >
              {[
                "Estratégias avançadas de SEO",
                "Táticas de marketing de conteúdo",
                "Segredos do tráfego pago",
                "Otimização de conversão",
                "Análise de dados eficiente",
                "Automação de marketing",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 min-h-[90px] rounded-lg border border-[#101010] p-4 bg-[#101010]"
                  variants={fadeIn}
                >
                  <CheckCircle className="h-6 w-6 text-[#c3a540]" />
                  <span className="text-lg font-medium text-[#c3a540]">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section id="preview" className="w-full py-12 md:py-24 lg:py-32 ">
          <motion.div
            className="container px-4 md:px-6 mx-auto"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              variants={fadeIn}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#c3a540]">
                  Dê uma Espiada no Conteúdo
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Veja algumas páginas do ebook e descubra o valor que você está
                  prestes a adquirir
                </p>
              </div>
            </motion.div>
            <motion.div
              className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerChildren}
            >
              {[
                {
                  title: "Estratégias de SEO Avançadas",
                  description:
                    "Aprenda técnicas de otimização que farão seu site alcançar o topo das buscas.",
                  image: "/pagina-1.png",
                },
                {
                  title: "Funil de Vendas Otimizado",
                  description:
                    "Descubra como criar um funil de vendas que converte visitantes em clientes fiéis.",
                  image: "/pagina-2.png",
                },
                {
                  title: "Análise de Dados Eficiente",
                  description:
                    "Saiba interpretar métricas e tomar decisões baseadas em dados concretos.",
                  image: "/pagina-3.png",
                },
              ].map((page, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  variants={fadeIn}
                >
                  <Image
                    src={page.image}
                    alt={page.title}
                    width={300}
                    height={400}
                    className="rounded-lg shadow-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-[#c3a540] mb-2">
                    {page.title}
                  </h3>
                  <p className="text-gray-300 text-center">
                    {page.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="mt-12 text-center" variants={fadeIn}>
              <Link
                href="#cta"
                className="inline-flex items-center justify-center rounded-md bg-[#c3a540] px-8 py-3 text-sm font-medium text-[#101010] shadow transition-colors hover:bg-[#e0b038] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c3a540]"
              >
                Desbloqueie Todo o Conteúdo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <section
          id="garantia"
          className="w-full py-16 md:py-24 lg:py-32 bg-[#101010]"
        >
          <motion.div
            className="container px-4 md:px-6 mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
              >
                <Image
                  src="/visionario-sucesso/garantia-7-dias.png" // Substitua por sua imagem de garantia
                  alt="Garantia de 7 dias"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-2xl"
                />
              </motion.div>
              <motion.div
                className="lg:w-1/2 space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#c3a540]">
                  Garantia de Satisfação de 7 Dias
                </h2>
                <p className="text-xl text-gray-300">
                  Estamos tão confiantes na qualidade do nosso ebook que
                  oferecemos uma garantia de reembolso total por 7 dias.
                </p>
                <ul className="space-y-4">
                  {[
                    "Teste o conteúdo sem riscos",
                    "Reembolso integral se não estiver satisfeito",
                    "Sem perguntas, sem complicações",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-3 text-gray-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 2.5,
                        delay: 1.5 + index * 0.2,
                        ease: "easeInOut",
                      }}
                    >
                      <Shield className="h-6 w-6 text-[#c3a540]" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <p className="text-gray-400 italic">
                  Sua satisfação é nossa prioridade. Invista em seu futuro com
                  confiança!
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section
          id="comprar"
          className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-[#1e1e1e]"
        >
          <motion.div
            className="container px-4 md:px-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              variants={fadeIn}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-[#c3a540] sm:text-5xl">
                  Pronto para Transformar seu Negócio?
                </h2>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Adquira agora o ebook {'"Visionário de Sucesso"'} e comece sua
                  jornada rumo ao sucesso digital.
                </p>
              </div>
              <motion.div
                className="w-full max-w-lg space-y-2"
                variants={fadeIn}
              >
                <form className="flex flex-col gap-2">
                  <Input
                    className="bg-white p-6 text-[#101010]"
                    placeholder="Seu melhor e-mail"
                    type="email"
                  />
                  <Button
                    className="bg-[#c3a540] p-6 font-bold text-[#101010] hover:bg-[#e0b038]"
                    type="submit"
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
                    Política de Privacidade
                  </Link>
                  .
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <motion.footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#c3a540]/20 bg-[#101010]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs text-gray-400">
          © 2024 Visionário de Sucesso. Todos os direitos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-[#c3a540]"
            href="/politica-privacidade"
          >
            Política de Privacidade
          </Link>
          <button
            className="text-xs hover:underline underline-offset-4 text-[#c3a540]"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Topo
          </button>
        </nav>
      </motion.footer>
    </div>
  );
}
