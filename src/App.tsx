import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, Award, BookOpen, Users, Target, Shield, Star, Zap, 
  GraduationCap, Mail, Phone, FileText, ChevronLeft, ChevronRight
} from 'lucide-react';
import curso1 from './imgs/curso1.png';
import curso2 from './imgs/curso2.png';
import curso3 from './imgs/curso3.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Slider automático (caso queira usar no futuro)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % courses.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  /**
   * =========================================================
   * SEÇÃO DE CURSOS
   * =========================================================
   */
  const courses = [
    {
      id: 1,
      title: "Prefeitura de Viçosa",
      category: "prefeituras",
      image: "imgs/curso1.png",
      description: "Prepare-se para o concurso da Prefeitura de Viçosa com aulas específicas e atualizadas.",
      link: "https://pay.kiwify.com.br/g6OFHa3",
      stats: {
        students: "1.200+",
        hours: "70+",
        rating: "4.9"
      }
    },
    {
      id: 2,
      title: "Prefeitura de Nova Lima",
      category: "prefeituras",
      image: curso1,
      description: "Preparatório completo para o concurso da Prefeitura de Nova Lima.",
      link: "https://pay.kiwify.com.br/bG7QAL7",
      stats: {
        students: "900+",
        hours: "50+",
        rating: "4.8"
      }
    },
    {
      id: 3,
      title: "Prefeitura de Conselheiro Lafaiete (IBGP)",
      category: "prefeituras",
      image: "curso2",
      description: "Curso intensivo voltado para o concurso IBGP - Prefeitura de Conselheiro Lafaiete.",
      link: "https://pay.kiwify.com.br/pnyCOhb",
      stats: {
        students: "750+",
        hours: "40+",
        rating: "4.9"
      }
    }
  ];

  // Filtra os cursos pela categoria selecionada
  const filteredCourses = courses.filter(
    (course) => activeFilter === 'all' || course.category === activeFilter
  );

  // Estatísticas do topo
  const stats = [
    { icon: Users, value: "50.000+", label: "Alunos Aprovados" },
    { icon: BookOpen, value: "1.000+", label: "Aulas Disponíveis" },
    { icon: Target, value: "98%", label: "Taxa de Aprovação" },
    { icon: Star, value: "4.9", label: "Avaliação Média" }
  ];

  /**
   * =========================================================
   * SEÇÃO DE CASES (CARROSSEL)
   * =========================================================
   */
  const casesData = [
    { id: 1, caption: "Case #1", image: "imgs/case3.png" },
    { id: 2, caption: "Case #2", image: "imgs/case1.png" },
    { id: 3, caption: "Case #3", image: "imgs/case2.png" },
    { id: 4, caption: "Case #4", image: "imgs/case4.png" },
    { id: 5, caption: "Case #5", image: "imgs/case5.png" },
    { id: 6, caption: "Case #6", image: "imgs/case6.png" },
    { id: 7, caption: "Case #7", image: "imgs/case7.png" },
    { id: 8, caption: "Case #8", image: "imgs/case8.png" },
    { id: 9, caption: "Case #9", image: "imgs/case9.png" },
    { id: 10, caption: "Case #10", image: "imgs/case10.png" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === casesData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? casesData.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  /**
   * =========================================================
   * RENDERIZAÇÃO
   * =========================================================
   */
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* HEADER */}
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo / Título */}
            <div className="flex items-center space-x-2">
              <GraduationCap 
                className={`w-8 h-8 ${scrolled ? 'text-blue-600' : 'text-white'}`} 
              />
              <h1 
                className={`text-2xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}
              >
                Professor Lucas Dias
              </h1>
            </div>
            
            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <a 
                href="#home" 
                className={`transition-all duration-300 hover:scale-105 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                Home
              </a>
              <a 
                href="#cursos" 
                className={`transition-all duration-300 hover:scale-105 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                Cursos
              </a>
              <a 
                href="#beneficios" 
                className={`transition-all duration-300 hover:scale-105 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                Benefícios
              </a>
              <button 
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                Começar Agora
              </button>
            </nav>

            {/* Botão Mobile */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* MENU MOBILE */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-20">
            <nav className="flex flex-col space-y-6">
              <a href="#home" className="text-xl text-gray-800 hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="#cursos" className="text-xl text-gray-800 hover:text-blue-600 transition-colors">
                Cursos
              </a>
              <a href="#beneficios" className="text-xl text-gray-800 hover:text-blue-600 transition-colors">
                Benefícios
              </a>
              <button 
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                Começar Agora
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Background degrade */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-90" />
          {/* Imagem de fundo */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/50" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Sua Aprovação é 
              <span className="bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text">
                {' '}Nossa Missão
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Prepare-se para os principais concursos com metodologia comprovada e material atualizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-white/50 flex items-center gap-2">
                Comece Sua Jornada
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
              <button className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Conheça os Cursos
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-white p-4 rounded-xl backdrop-blur-lg bg-white/10 transform hover:scale-105 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-300" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section id="cursos" className="py-32 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
              Nossos Cursos
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Escolha entre nossa seleção de cursos preparatórios de alta qualidade
            </p>
          </div>
          
          {/* Filtro (apenas duas opções: all e prefeituras) */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['all', 'prefeituras'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {filter === 'all' ? 'Todos' : 'Prefeituras'}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div 
                key={course.id} 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl"
              >
                {/** 
                 * Container fixo para manter a proporção.
                 * object-contain preserva a imagem sem cortes.
                 */}
                <div className="relative w-full h-72 bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="object-contain h-full w-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-blue-600 font-semibold">
                        {course.stats.students}
                      </div>
                      <div className="text-sm text-gray-500">Alunos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-600 font-semibold">
                        {course.stats.hours}
                      </div>
                      <div className="text-sm text-gray-500">Horas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-600 font-semibold">
                        {course.stats.rating}
                      </div>
                      <div className="text-sm text-gray-500">Avaliação</div>
                    </div>
                  </div>
                  
                  {/* Botão "Saiba Mais" que abre o link do curso em outra aba */}
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg text-center group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Saiba Mais</span>
                    <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section id="beneficios" className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
              Por que nos escolher?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Descubra as vantagens que fazem nosso método ser tão eficiente
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">
                Excelência Comprovada
              </h3>
              <p className="text-gray-600">
                Mais de 50.000 alunos aprovados em diversos concursos, comprovando a eficácia do nosso método.
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">
                Material Atualizado
              </h3>
              <p className="text-gray-600">
                Conteúdo sempre atualizado conforme os últimos editais, garantindo sua preparação adequada.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">
                Suporte Dedicado
              </h3>
              <p className="text-gray-600">
                Professores experientes prontos para tirar suas dúvidas e ajudar em sua jornada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASES SECTION (CARROSSEL) */}
      <section id="cases" className="py-32 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
              Casos de Sucesso dos Alunos
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Confira os melhores momentos e depoimentos que marcaram a jornada de nossos alunos.
            </p>
          </div>

          {/* Contêiner do carrossel */}
          <div className="relative overflow-hidden">
            {/* Botão de Voltar */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-md hover:bg-gray-200 transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Botão de Avançar */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-md hover:bg-gray-200 transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Lista de slides */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {casesData.map((item, index) => (
                <div 
                  key={item.id}
                  className="w-full flex-shrink-0 px-4"
                  style={{ scrollSnapAlign: 'center' }}
                >
                  <div className="bg-white rounded-xl shadow-xl p-6 max-w-xl mx-auto">
                    <img
                      src={item.image}
                      alt={`Case ${item.id}`}
                      className="w-full h-auto rounded-lg mb-4 object-cover"
                    />
                    <h3 className="text-2xl font-semibold text-center mb-2 text-gray-800">
                      {item.caption}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {/* Pode inserir um texto adicional, se desejar */}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores de slides (bolinhas) */}
          <div className="flex justify-center mt-8 space-x-2">
            {casesData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === idx ? 'bg-blue-600' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <GraduationCap className="w-8 h-8 text-blue-300" />
                <h3 className="text-2xl font-bold">Professor Lucas Dias</h3>
              </div>
              <p className="text-blue-200">
                Sua jornada para o sucesso começa aqui. Junte-se a milhares de aprovados.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Contato</h4>
              <div className="space-y-4 text-blue-200">
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  contato@lucadias.com.br
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  (34) 8822-2497
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Links Úteis</h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="#" 
                    className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Shield className="w-5 h-5" />
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <FileText className="w-5 h-5" />
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-700/50 mt-12 pt-8 text-center">
            <p className="text-blue-200">&copy; 2024 Lucas Dias. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
