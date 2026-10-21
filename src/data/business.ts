import type { LucideIcon } from 'lucide-react'
import { Cpu, Vault, LockKeyhole, Fingerprint, Copy, Scissors } from 'lucide-react'

export const business = {
  name: 'Chaveiro Oliveira',
  phoneDisplay: '(71) 99109-1318',
  phoneTel: '+5571991091318',
  whatsapp: '5571991091318',
  rating: '5,0',
  reviews: 460,
  serviceArea: 'Lauro de Freitas e região',
  instagram: 'https://www.instagram.com/cheveiro_olive/',
  instagramHandle: '@cheveiro_olive',
  google: 'https://share.google/J8r0DzMvcvcuFuSc2',
  timeZone: 'America/Bahia',
}

// Índice = Date.getDay() (0 = domingo). null = sem atendimento.
export const schedule: { day: string; time: [string, string] | null }[] = [
  { day: 'Domingo', time: null },
  { day: 'Segunda-feira', time: ['08:00', '18:00'] },
  { day: 'Terça-feira', time: ['08:00', '18:00'] },
  { day: 'Quarta-feira', time: ['08:00', '18:00'] },
  { day: 'Quinta-feira', time: ['08:00', '18:00'] },
  { day: 'Sexta-feira', time: ['08:00', '18:00'] },
  { day: 'Sábado', time: null },
]

export type Service = { title: string; description: string; icon: LucideIcon }

export const services: Service[] = [
  {
    title: 'Chaves codificadas',
    description: 'Cópia e programação de chaves com chip e telecomando para carros e motos.',
    icon: Cpu,
  },
  {
    title: 'Abertura de cofre',
    description: 'Abertura técnica de cofres mecânicos e eletrônicos, com cuidado para não danificar.',
    icon: Vault,
  },
  {
    title: 'Troca de segredo',
    description: 'Mudou de casa ou perdeu a chave? Trocamos o segredo da fechadura sem trocar a peça.',
    icon: LockKeyhole,
  },
  {
    title: 'Fechadura digital',
    description: 'Instalação de fechaduras digitais com senha, biometria e cartão, com ajuste da porta e configuração.',
    icon: Fingerprint,
  },
  {
    title: 'Cópia de chaves',
    description: 'Cópias de chaves residenciais, tetra, gorje e cadeado, feitas com precisão.',
    icon: Copy,
  },
  {
    title: 'Afiação de alicate',
    description: 'Afiação de alicates de cutícula e unha, deixando o corte como novo.',
    icon: Scissors,
  },
]

export type Media = {
  type: 'image' | 'video'
  src: string
  poster?: string
  caption: string
  alt: string
  // Enquadramento no slide 4:5 (CSS object-position), útil para fotos verticais.
  position?: string
  // Sem crédito = foto real do Chaveiro Oliveira; com crédito = imagem ilustrativa.
  credit?: { author: string; license: string; source: string }
}

// Fotos reais do Chaveiro Oliveira (perfil do Google e Instagram).
// Para adicionar mais, coloque o arquivo em public/media/ e inclua aqui.
// Imagens de terceiros levam `credit` e aparecem com aviso de "ilustrativa" e créditos no rodapé.
export const gallery: Media[] = [
  {
    type: 'image',
    src: '/media/instalacao-porta.jpg',
    caption: 'Instalação de fechadura no local',
    alt: 'Chaveiro Oliveira ajoelhado instalando uma fechadura em porta de madeira',
    position: '50% 60%',
  },
  {
    type: 'image',
    src: '/media/fechadura-biometrica.jpg',
    caption: 'Fechadura digital com biometria',
    alt: 'Fechadura digital preta com teclado numérico e leitor de digital instalada em porta de madeira',
  },
  {
    type: 'image',
    src: '/media/atendimento-automotivo.jpg',
    caption: 'Atendimento automotivo',
    alt: 'Chaveiro trabalhando no painel de um carro com as ferramentas no banco',
    position: '35% 50%',
  },
  {
    type: 'image',
    src: '/media/porta-seguranca.jpg',
    caption: 'Fechadura de segurança e troca de segredo',
    alt: 'Porta de aço com cilindro de segurança, chave na fechadura e fechadura digital logo abaixo',
    position: '50% 55%',
  },
  {
    type: 'image',
    src: '/media/fechadura-senha.jpg',
    caption: 'Fechadura digital com senha',
    alt: 'Fechadura digital com teclado iluminado em azul instalada em porta de madeira',
    position: '50% 40%',
  },
  {
    type: 'image',
    src: '/media/chave-canivete.jpg',
    caption: 'Chave canivete codificada',
    alt: 'Chave canivete automotiva codificada apoiada sobre o volante do carro',
    position: '50% 32%',
  },
  {
    type: 'image',
    src: '/media/fechadura-digital-tela.jpg',
    caption: 'Fechadura digital com tela',
    alt: 'Fechadura digital com visor e maçaneta instalada em porta de madeira',
    position: '50% 45%',
  },
  {
    type: 'image',
    src: '/media/fechadura-digital-pado.jpg',
    caption: 'Fechadura digital instalada',
    alt: 'Fechadura digital preta com puxador instalada em porta de madeira',
    position: '30% 45%',
  },
]

export type Review = { author: string; text: string }

// Avaliações reais do perfil no Google (texto como publicado; só frases completas quando o Google corta).
export const reviews: Review[] = [
  {
    author: 'Daniela Ribeiro',
    text: 'Profissional excelente, foi recomendado por uma amiga e agora eu recomendo à todos. Minha porta já estava com alguns problemas, mas ainda assim o Tiago resolveu tudo com muita paciência e profissionalismo. Recomendo demais!!',
  },
  {
    author: 'Scheila Santana',
    text: 'Um trabalho de excelência merece reconhecimento: fechadura digital instalada com precisão, cuidado e tecnologia. Quando o profissional é bom, a segurança agradece.',
  },
  {
    author: 'Suzane Silva',
    text: 'Excelente. Amei demais o serviço, o atendimento e profissionalismo. Minha fechadura ficou com um acabamento incrível. Estou apaixonada.',
  },
  {
    author: 'Wedson Araujo',
    text: 'Tiago é um Excelente profissional. Extremamente satisfeito com o serviço prestado.',
  },
]
