import videoItems from 'data/pages/home/video-data';
import caseStudiesData from 'data/shared/case-studies/case-studies-list';

// TODO: set actual videoId to the film

const data = {
  en: {
    hero: {
      title:
        '효율적인 네트워킹, 관측 가능성, 추적 및 보안을 위해 커널을 동적으로 프로그래밍할 수 있습니다',
      blackButtonTitle: 'Project Landscape',
      blackButtonUrl: '/applications',
      yellowButtonTitle: 'eBPF란',
      yellowButtonUrl: '/what-is-ebpf',
      altImage: 'eBPF diagram',
      items: [
        '안전한 실행을 위해 프로그램은 검증됩니다',
        '커널의 기능을 변경하기 위해 임의의 위치에 훅을 걸 수 있습니다',
        'JIT 컴파일러를 사용하여 원래의 실행 속도와 유사합니다',
        '런타임에서 OS에 기능을 추가할 수 있습니다',
      ],
    },
    caseStudies: {
      title: '모든 산업의 다양한 기업들이 eBPF를 프로덕션 환경에서 사용합니다',
      linkText: 'More case studies',
      linkUrl: '/case-studies/',
      items: caseStudiesData.en.slice(0, 6),
    },
    whyEbpf: {
      title: 'eBPF를 왜 사용할까요?',
      linkTitle: 'What is eBPF',
      linkUrl: '/what-is-ebpf/',
      items: [
        {
          title: '성능',
          icon: 'performance',
          description:
            'eBPF는 JIT 컴파일되어 커널 내에서 직접 실행되므로 처리 성능이 크게 향상됩니다.',
        },
        {
          title: '보안',
          icon: 'security',
          description:
            'eBPF 프로그램은 커널에서 오류가 발생하지 않도록 검증되며 권한 있는 사용자만이 수정할 수 있습니다.',
        },
        {
          title: 'Flexibility',
          icon: 'flexibility',
          description:
            '커널을 재시작하거나 패치하지 않고도 커널에 기능 및 유즈케이스를 수정하거나 추가할 수 있습니다.',
        },
      ],
    },
    film: {
      label: '최초공개',
      title: '커널을 잠금해제하다',
      videoId: 'Wb_vD3XZYOA',
      description:
        'eBPF 다큐멘터리는 eBPF의 시작 및 산업을 변화시키는 기술의 이야기, 도전 그리고 보상에 대한 심층적인 내용을 소개합니다. 여러분은 Meta, Intel, Isovalent, Google, Red Hat 및 Netflix와 같이 eBPF의 성공과 확산을 위한 도구를 설계한 오픈소스 세상 최고의 사람들의 이야기를 듣게 됩니다.',
      buttonText: 'eBPF 다큐멘터리 웹 사이트',
      buttonUrl: 'https://ebpfdocumentary.com/',
    },
    testimonials: {
      items: [
        {
          logo: 'azure',
          logoWidth: 134,
          company: 'Microsoft Azure',
          review:
            'eBPF has resulted in a new generation of tooling that allows developers to easily diagnose problems, innovate quickly, and extend operating system functionality.',
          author: 'Mark Russinovich',
          role: 'Chief Technology Officer at Microsoft Azure, 2021',
        },
        {
          logo: 'google',
          logoWidth: 104,
          company: 'Google',
          review:
            'eBPF is the future of networking for the Linux kernel and Google is pleased to be part of the evolving standard it has created.',
          author: 'Chris DiBona',
          role: 'Director of Open Source at Google, 2021',
        },
        {
          logo: 'isovalent',
          logoWidth: 148,
          company: 'Isovalent',
          review:
            'Even though eBPF has already found its ways into the production stacks of countless enterprises, we are still at the beginning of the innovation curve that eBPF as a technology unlocks',
          author: 'Thomas Graf',
          role: 'Chief Technology Officer at Isovalent, 2021',
        },
        {
          logo: 'meta',
          logoWidth: 120,
          company: 'Meta',
          review:
            'For many years, eBPF has played a critical role in accelerating the kernel development. We’re excited to support the work of the eBPF community, enabling them to build the tools needed to power the next generation of Linux system development.',
          author: 'Chris Mason',
          role: 'Kernel Maintainer and Engineering Director at Facebook, 2021',
        },
        {
          logo: 'netflix',
          logoWidth: 109,
          company: 'Netflix',
          review:
            'eBPF is a new type of software that provides superpower capabilities, birthing an industry of networking, performance, and security technologies. Netflix has pioneered uses of eBPF for observability, providing insight into countless areas that were previously difficult or prohibitively expensive to instrument. eBPF has helped us lower application latency and find cost savings.',
          author: 'Brendan Gregg',
          role: 'Senior performance engineer at Netflix, 2021',
        },
      ],
    },
    features: {
      title: 'What’s possible with eBPF?',
      items: [
        {
          bgClassName: 'bg-secondary-yellow-light',
          image: 'networking',
          title: 'Networking',
          description:
            'Speed packet processing without leaving kernel space. Add additional protocol parsers and easily program any forwarding logic to meet changing requirements.',
        },
        {
          bgClassName: 'bg-secondary-green-light',
          image: 'observability',
          title: 'Observability',
          description:
            'Collection and in-kernel aggregation of custom metrics with generation of visibility events and data structures from a wide range of possible sources without having to export samples.',
        },
        {
          bgClassName: 'bg-secondary-blue-light',
          image: 'tracingAndProfiling',
          title: 'Tracing & Profiling',
          description:
            'Attach eBPF programs to trace points as well as kernel and user application probe points giving powerful introspection abilities and unique insights to troubleshoot system performance problems.',
        },
        {
          bgClassName: 'bg-secondary-red-light',
          image: 'security',
          title: 'Security',
          description:
            'Combine seeing and understanding all system calls with a packet and socket-level view of all networking to create security systems operating on more context with a better level of control.',
        },
      ],
    },
    videoGallery: {
      title: 'eBPF Community Talks',
      items: videoItems,
    },
  },
  'fr-fr': {
    hero: {
      title:
        'Programmation dynamique du noyau pour un trafic réseau, une observabilité, une trace et une sécurité efficaces',
      blackButtonTitle: 'Paysage du projet',
      blackButtonUrl: '/fr-fr/applications',
      yellowButtonTitle: 'Qu’est-ce qu’eBPF',
      yellowButtonUrl: '/fr-fr/what-is-ebpf',
      altImage: 'eBPF diagram',
      items: [
        'Vérification des programmes pour une exécution sécurisée',
        'Branchement n’importe où dans le noyau pour une modification des fonctionnalités',
        'Compilateur JIT pour une vitesse d’exécution quasi native',
        'Accès au fonctions bas niveau du système',
      ],
    },
    caseStudies: {
      title: 'Des entreprises de tous type d’industries utilisent eBPF en production',
      linkText: 'Plus d’études de cas',
      linkUrl: '/fr-fr/case-studies/',
      items: caseStudiesData['fr-fr'].slice(0, 6),
    },
    whyEbpf: {
      title: 'Pourquoi eBPF?',
      linkTitle: 'Qu’est ce qu’eBPF?',
      linkUrl: '/fr-fr/what-is-ebpf/',
      items: [
        {
          title: 'Performance',
          icon: 'performance',
          description:
            'eBPF accélère considérablement l’exécution en étant compilé JIT et en s’exécutant directement dans le noyau.',
        },
        {
          title: 'Sécurité',
          icon: 'security',
          description:
            'Les programmes eBPF sont vérifiés pour ne pas planter le noyau et ne peuvent être modifiés que par des utilisateurs privilégiés.',
        },
        {
          title: 'Flexibilité',
          icon: 'flexibility',
          description:
            'Modification ou ajout de fonctionnalités au noyau, sans le patcher ou le redémarrer.',
        },
      ],
    },
    film: {
      label: 'premiere',
      title: 'Unlocking the Kernel',
      videoId: 'Wb_vD3XZYOA',
      description:
        'The eBPF Documentary provides an in-depth exploration on the origins of eBPF and showcases the stories, challenges, and rewards of this industry changing technology. You will hear from the best and brightest in the open source world, including key stakeholders from Meta, Intel, Isovalent, Google, Red Hat, and Netflix, who helped shape and build the tools that drove the success and adoption of eBPF.',
      buttonText: 'eBPF Documentary Website',
      buttonUrl: 'https://ebpfdocumentary.com/',
    },
    testimonials: {
      items: [
        {
          logo: 'azure',
          logoWidth: 134,
          company: 'Microsoft Azure',
          review:
            'eBPF a donné naissance à une nouvelle génération d’outils permettant aux développeurs de diagnostiquer facilement les problèmes, d’innover rapidement et d’étendre les fonctionnalités du système d’exploitation.',
          author: 'Mark Russinovich',
          role: 'Chief Technology Officer at Microsoft Azure, 2021',
        },
        {
          logo: 'google',
          logoWidth: 104,
          company: 'Google',
          review:
            'eBPF est l’avenir de la mise en réseau pour le noyau Linux et Google est heureux de faire partie de l’évolution engendrée.',
          author: 'Chris DiBona',
          role: 'Director of Open Source at Google, 2021',
        },
        {
          logo: 'isovalent',
          logoWidth: 148,
          company: 'Isovalent',
          review:
            'Bien qu’eBPF ait déjà trouvé sa place dans les logiciels en production d’innombrables entreprises, l’innovation que représente eBPF, en tant que technologie, ne fait que débuter.',
          author: 'Thomas Graf',
          role: 'Chief Technology Officer at Isovalent, 2021',
        },
        {
          logo: 'meta',
          logoWidth: 120,
          company: 'Meta',
          review:
            'Pendant de nombreuses années, eBPF a joué un rôle essentiel dans l’accélération du développement du noyau. Nous sommes ravis de soutenir le travail de la communauté eBPF, en leur permettant de construire les outils nécessaires pour alimenter la prochaine génération du développement Linux.',
          author: 'Chris Mason',
          role: 'Kernel Maintainer and Engineering Director at Facebook, 2021',
        },
        {
          logo: 'netflix',
          logoWidth: 109,
          company: 'Netflix',
          review:
            'eBPF est une nouvelle façon de programmer qui offre des super-pouvoirs, donnant naissance à une gamme d’applications dans l’industrie du réseau, du suivi de performance et de la sécurité. Netflix a été le premier à utiliser eBPF pour l’observabilité, fournissant des informations dans de nombreux domaines qui étaient auparavant difficiles ou très coûteux à instrumenter. eBPF nous a aidé à réduire la latence des applications et à réduire les coûts.',
          author: 'Brendan Gregg',
          role: 'Senior performance engineer at Netflix, 2021',
        },
      ],
    },
    features: {
      title: 'Que peut-on faire avec eBPF?',
      items: [
        {
          bgClassName: 'bg-secondary-yellow-light',
          image: 'networking',
          title: 'Réseau',
          description:
            'Accélérer le traitement des paquets sans même quitter l’espace noyau. Ajouter des parseurs de protocole supplémentaires et programmer facilement n’importe quelle logique de routage pour répondre à des exigences sans cesse en évolution.',
        },
        {
          bgClassName: 'bg-secondary-green-light',
          image: 'observability',
          title: 'Observabilité',
          description:
            'Collecter et agréger des métriques personnalisées dans le noyau en générant des événements de visibilité et en accédant à des structures de données à partir d’un large éventail de sources possibles sans avoir à exporter des échantillons.',
        },
        {
          bgClassName: 'bg-secondary-blue-light',
          image: 'tracingAndProfiling',
          title: 'Traçabilité et profilage',
          description:
            'Attacher des programmes eBPF aux points de sonde au niveau kernel mais aussi de l’application utilisateur afin d’offrir de puissantes capacités d’introspection et des informations uniques pour résoudre les problèmes de performances du système.',
        },
        {
          bgClassName: 'bg-secondary-red-light',
          image: 'security',
          title: 'Sécurité',
          description:
            'Associer la visualisation et la compréhension de tous les appels système au niveau des paquets et des sockets de l’ensemble du réseau pour créer des solutions de sécurité fonctionnant sur un contexte plus large avec un meilleur niveau de contrôle.',
        },
      ],
    },
    videoGallery: {
      title: 'Présentations de la communauté eBPF',
      items: videoItems,
    },
  },
  pt: {
    hero: {
      title:
        'Programe dinamicamente o kernel para rede, observabilidade, rastreamento e segurança eficientes.',
      blackButtonTitle: 'Paisagem do Projeto',
      blackButtonUrl: '/pt/applications',
      yellowButtonTitle: 'O que é eBPF',
      yellowButtonUrl: '/pt/what-is-ebpf',
      altImage: 'eBPF diagram',
      items: [
        'Os programas são verificados para serem executados com segurança',
        'Conecte-se em qualquer lugar do kernel para modificar a funcionalidade',
        'Compilador JIT para velocidade de execução quase nativa',
        'Adicione recursos do sistema operacional em tempo de execução',
      ],
    },
    caseStudies: {
      title: 'Organizações de todos os setores usam eBPF na produção',
      linkText: 'Mais estudos de caso',
      linkUrl: '/pt/case-studies/',
      items: caseStudiesData.pt.slice(0, 6),
    },
    whyEbpf: {
      title: 'Por que ebpf?',
      linkTitle: 'O que é ebpf',
      linkUrl: '/pt/what-is-ebpf/',
      items: [
        {
          title: 'Desempenho',
          icon: 'performance',
          description:
            'O eBPF melhora drasticamente o processamento ao ser compilado JIT e executado diretamente no kernel.',
        },
        {
          title: 'Segurança',
          icon: 'security',
          description:
            'Programas eBPF são verificados para não travar o kernel e só podem ser modificados por usuários privilegiados.',
        },
        {
          title: 'Flexibilidade',
          icon: 'flexibility',
          description:
            'Modifique ou adicione funcionalidades e casos de uso ao kernel sem precisar reiniciá-lo ou corrigi-lo.',
        },
      ],
    },
    film: {
      label: '공개',
      title: '커널을 잠금 해제하다',
      videoId: 'Wb_vD3XZYOA',
      description:
        'The eBPF Documentary provides an in-depth exploration on the origins of eBPF and showcases the stories, challenges, and rewards of this industry changing technology. You will hear from the best and brightest in the open source world, including key stakeholders from Meta, Intel, Isovalent, Google, Red Hat, and Netflix, who helped shape and build the tools that drove the success and adoption of eBPF.',
      buttonText: 'eBPF Documentary Website',
      buttonUrl: 'https://ebpfdocumentary.com/',
    },
    testimonials: {
      items: [
        {
          logo: 'azure',
          logoWidth: 134,
          company: 'Microsoft Azure',
          review:
            'O eBPF resultou em uma nova geração de ferramentas que permite aos desenvolvedores diagnosticar problemas facilmente, inovar rapidamente e ampliar a funcionalidade do sistema operacional.',
          author: 'Mark Russinovich',
          role: 'Chief Technology Officer at Microsoft Azure, 2021',
        },
        {
          logo: 'google',
          logoWidth: 104,
          company: 'Google',
          review:
            'eBPF é o futuro da rede para o kernel Linux e o Google tem o prazer de fazer parte do padrão em evolução que criou.',
          author: 'Chris DiBona',
          role: 'Director of Open Source at Google, 2021',
        },
        {
          logo: 'isovalent',
          logoWidth: 148,
          company: 'Isovalent',
          review:
            'Embora o eBPF já tenha entrado nas pilhas de produção de inúmeras empresas, ainda estamos no início da curva de inovação que o eBPF como tecnologia desbloqueia.',
          author: 'Thomas Graf',
          role: 'Chief Technology Officer at Isovalent, 2021',
        },
        {
          logo: 'meta',
          logoWidth: 120,
          company: 'Meta',
          review:
            'Por muitos anos, o eBPF desempenhou um papel crítico na aceleração do desenvolvimento do kernel. Estamos entusiasmados em apoiar o trabalho da comunidade eBPF, permitindo-lhes construir as ferramentas necessárias para impulsionar a próxima geração de desenvolvimento de sistemas Linux.',
          author: 'Chris Mason',
          role: 'Kernel Maintainer and Engineering Director at Facebook, 2021',
        },
        {
          logo: 'netflix',
          logoWidth: 109,
          company: 'Netflix',
          review:
            'eBPF é um novo tipo de software que fornece recursos super poderosos, dando origem a uma indústria de tecnologias de rede, desempenho e segurança. A Netflix foi pioneira no uso do eBPF para observabilidade, fornecendo informações sobre inúmeras áreas que antes eram difíceis ou proibitivamente caras de instrumentar.',
          author: 'Brendan Gregg',
          role: 'Senior performance engineer at Netflix, 2021',
        },
      ],
    },
    features: {
      title: 'O que é possível com eBPF?',
      items: [
        {
          bgClassName: 'bg-secondary-yellow-light',
          image: 'networking',
          title: 'Rede',
          description:
            'Acelere o processamento de pacotes sem deixar espaço no kernel. Adicione analisadores de protocolo adicionais e programe facilmente qualquer lógica de encaminhamento para atender aos requisitos em constante mudança.',
        },
        {
          bgClassName: 'bg-secondary-green-light',
          image: 'observability',
          title: 'Observabilidade',
          description:
            'Coleta e agregação no kernel de métricas personalizadas com geração de eventos de visibilidade e estruturas de dados de uma ampla variedade de fontes possíveis, sem a necessidade de exportar amostras.',
        },
        {
          bgClassName: 'bg-secondary-blue-light',
          image: 'tracingAndProfiling',
          title: 'Rastreamento e perfil',
          description:
            'Anexe programas eBPF a pontos de rastreamento, bem como a pontos de investigação de aplicativos de usuário e de kernel, fornecendo poderosas habilidades de introspeção e insights exclusivos para solucionar problemas de desempenho do sistema.',
        },
        {
          bgClassName: 'bg-secondary-red-light',
          image: 'security',
          title: 'Segurança',
          description:
            'Combine a visualização e a compreensão de todas as chamadas do sistema com uma visão em nível de pacote e soquete de todas as redes para criar sistemas de segurança operando em mais contexto com um melhor nível de controle.',
        },
      ],
    },
    videoGallery: {
      title: 'Palestras comunitárias eBPF',
      items: videoItems,
    },
  },
  'pt-br': {
    hero: {
      title:
        'Programar dinamicamente o kernel para networking eficiente, observabilidade, rastreamento e segurança',
      blackButtonTitle: 'Cenário do Projeto',
      blackButtonUrl: '/pt-br/applications',
      yellowButtonTitle: 'O que é o eBPF',
      yellowButtonUrl: '/pt-br/what-is-ebpf',
      altImage: 'eBPF diagram',
      items: [
        'Programas são verificados para execução segura',
        'Gancho em qualquer lugar no kernel para modificar a funcionalidade',
        'Compilador JIT para velocidade de execução quase nativa',
        'Adicionar capacidades do sistema operacional em tempo de execução',
      ],
    },
    caseStudies: {
      title: 'Organizações em todas as indústrias usam o eBPF em produção',
      linkText: 'Mais estudos de caso',
      linkUrl: '/pt-br/case-studies/',
      items: caseStudiesData['pt-br'].slice(0, 6),
    },
    whyEbpf: {
      title: 'Por que o eBPF?',
      linkTitle: 'O que é o eBPF?',
      linkUrl: '/pt-br/what-is-ebpf/',
      items: [
        {
          title: 'Desempenho',
          icon: 'performance',
          description:
            'O eBPF melhora drasticamente o processamento ao ser compilado JIT e executado diretamente no kernel.',
        },
        {
          title: 'Segurança',
          icon: 'security',
          description:
            'Programas eBPF são verificados para não causar falhas no kernel e só podem ser modificados por usuários privilegiados.',
        },
        {
          title: 'Flexibilidade',
          icon: 'flexibility',
          description:
            'Modificar ou adicionar funcionalidades e casos de uso ao kernel sem a necessidade de reiniciá-lo ou aplicar patches.',
        },
      ],
    },
    film: {
      label: '최초공개',
      title: '커널을 잠금해제하다',
      videoId: 'Wb_vD3XZYOA',
      description:
        'The eBPF Documentary provides an in-depth exploration on the origins of eBPF and showcases the stories, challenges, and rewards of this industry changing technology. You will hear from the best and brightest in the open source world, including key stakeholders from Meta, Intel, Isovalent, Google, Red Hat, and Netflix, who helped shape and build the tools that drove the success and adoption of eBPF.',
      buttonText: 'eBPF Documentary Website',
      buttonUrl: 'https://ebpfdocumentary.com/',
    },
    testimonials: {
      items: [
        {
          logo: 'azure',
          logoWidth: 134,
          company: 'Microsoft Azure',
          review:
            'O eBPF resultou em uma nova geração de ferramentas que permitem que os desenvolvedores diagnostiquem problemas com facilidade, inovem rapidamente e estendam a funcionalidade do sistema operacional.',
          author: 'Mark Russinovich',
          role: 'Chief Technology Officer at Microsoft Azure, 2021',
        },
        {
          logo: 'google',
          logoWidth: 104,
          company: 'Google',
          review:
            'O eBPF é o futuro da rede para o kernel Linux, e o Google tem o prazer de fazer parte do padrão em evolução que ele criou.',
          author: 'Chris DiBona',
          role: 'Director of Open Source at Google, 2021',
        },
        {
          logo: 'isovalent',
          logoWidth: 148,
          company: 'Isovalent',
          review:
            'Apesar de o eBPF já estar presente nas pilhas de produção de inúmeras empresas, ainda estamos no início da curva de inovação que a tecnologia eBPF desbloqueia.',
          author: 'Thomas Graf',
          role: 'Chief Technology Officer at Isovalent, 2021',
        },
        {
          logo: 'meta',
          logoWidth: 120,
          company: 'Meta',
          review:
            'Por muitos anos, o eBPF desempenhou um papel crítico no desenvolvimento do kernel. Estamos empolgados em apoiar o trabalho da comunidade do eBPF, permitindo que eles construam as ferramentas necessárias para impulsionar a próxima geração do desenvolvimento de sistemas Linux.',
          author: 'Chris Mason',
          role: 'Kernel Maintainer and Engineering Director at Facebook, 2021',
        },
        {
          logo: 'netflix',
          logoWidth: 109,
          company: 'Netflix',
          review:
            'O eBPF é um novo tipo de software que oferece capacidades de superpoder, dando origem a uma indústria de tecnologias de rede, desempenho e segurança. A Netflix tem sido pioneira no uso do eBPF para observabilidade, fornecendo insights em inúmeras áreas que anteriormente eram difíceis ou proibitivamente caras de serem instrumentadas. O eBPF nos ajudou a reduzir a latência do aplicativo e encontrar economia de custos.',
          author: 'Brendan Gregg',
          role: 'Senior performance engineer at Netflix, 2021',
        },
      ],
    },
    features: {
      title: 'O que é possível com o eBPF?',
      items: [
        {
          bgClassName: 'bg-secondary-yellow-light',
          image: 'networking',
          title: 'Rede',
          description:
            'Acelere o processamento de pacotes sem sair do espaço do kernel. Adicione analisadores de protocolo adicionais e programe facilmente qualquer lógica de encaminhamento para atender a requisitos em constante mudança.',
        },
        {
          bgClassName: 'bg-secondary-green-light',
          image: 'observability',
          title: 'Observabilidade',
          description:
            'Combine a visualização e compreensão de todas as chamadas do sistema com uma visão de nível de pacote e socket de toda a rede para criar sistemas de segurança que operam com mais contexto e um melhor nível de controle.',
        },
        {
          bgClassName: 'bg-secondary-blue-light',
          image: 'tracingAndProfiling',
          title: 'Rastreamento e Profiling',
          description:
            'Anexe programas eBPF a pontos de rastreamento, bem como pontos de sondagem de aplicativos do kernel e do usuário, oferecendo poderosas habilidades de introspecção e insights únicos para solucionar problemas de desempenho do sistema.',
        },
        {
          bgClassName: 'bg-secondary-red-light',
          image: 'security',
          title: 'Segurança',
          description:
            'Combine a visualização e compreensão de todas as chamadas do sistema com uma visão de nível de pacote e socket de toda a rede para criar sistemas de segurança que operam com mais contexto e um melhor nível de controle.',
        },
      ],
    },
    videoGallery: {
      title: 'Palestras da Comunidade do eBPF',
      items: videoItems,
    },
  },
  'it-it': {
    hero: {
      title:
        'Programma dinamicamente il kernel per networking efficiente, osservabilità, tracciamento e sicurezza',
      blackButtonTitle: 'Panorama dei Progetti',
      blackButtonUrl: '/it-it/applications',
      yellowButtonTitle: 'Cos’è eBPF',
      yellowButtonUrl: '/it-it/what-is-ebpf',
      altImage: 'eBPF diagram',
      items: [
        'I programmi sono verificati per essere eseguiti in sicurezza',
        'Agganciali ovunque nel kernel per modificarne la funzionalità',
        'Compilatore JIT per una velocità d’esecuzione quasi nativa',
        'Aggiungi funzionalità del sistema operativo in fase di esecuzione',
      ],
    },
    caseStudies: {
      title: 'Le organizzazioni di ogni settore usano eBPF in produzione',
      linkText: 'Altri casi di studio',
      linkUrl: '/it-it/case-studies/',
      items: caseStudiesData['it-it'].slice(0, 6),
    },
    whyEbpf: {
      title: 'Perché eBPF?',
      linkTitle: 'Cos’è eBPF',
      linkUrl: '/it-it/what-is-ebpf/',
      items: [
        {
          title: 'Prestazioni',
          icon: 'performance',
          description:
            'eBPF migliora drasticamente l’elaborazione essendo compilato JIT ed eseguito direttamente nel kernel.',
        },
        {
          title: 'Sicurezza',
          icon: 'security',
          description:
            'I programmi eBPF sono verificati per evitare il crash del kernel e possono essere modificati solo da utenti privilegiati.',
        },
        {
          title: 'Flessibilità',
          icon: 'flexibility',
          description:
            'Modificare o aggiungere una funzionalità e casi d’uso al kernel senza doverlo riavviare o applicare una patch.',
        },
      ],
    },
    film: {
      label: 'premiere',
      title: 'Unlocking the Kernel',
      videoId: 'Wb_vD3XZYOA',
      description:
        'The eBPF Documentary provides an in-depth exploration on the origins of eBPF and showcases the stories, challenges, and rewards of this industry changing technology. You will hear from the best and brightest in the open source world, including key stakeholders from Meta, Intel, Isovalent, Google, Red Hat, and Netflix, who helped shape and build the tools that drove the success and adoption of eBPF.',
      buttonText: 'eBPF Documentary Website',
      buttonUrl: 'https://ebpfdocumentary.com/',
    },
    testimonials: {
      items: [
        {
          logo: 'azure',
          logoWidth: 134,
          company: 'Microsoft Azure',
          review:
            'eBPF ha dato vita a una nuova generazione di strumenti che permettono agli sviluppatori di diagnosticare i problemi facilmente, innovare velocemente ed estendere le funzionalità del sistema operativo.',
          author: 'Mark Russinovich',
          role: 'Chief Technology Officer at Microsoft Azure, 2021',
        },
        {
          logo: 'google',
          logoWidth: 104,
          company: 'Google',
          review:
            'eBPF è il futuro del networking per il kernel Linux, e Google è lieta di essere parte degli standard in evoluzione che ha creato.',
          author: 'Chris DiBona',
          role: 'Director of Open Source at Google, 2021',
        },
        {
          logo: 'isovalent',
          logoWidth: 148,
          company: 'Isovalent',
          review:
            'Anche se eBPF è già entrato nello stack di produzione di innumerevoli aziende, siamo ancora all’inizio della curva di innovazione che eBPF come tecnologia consente di sfruttare.',
          author: 'Thomas Graf',
          role: 'Chief Technology Officer at Isovalent, 2021',
        },
        {
          logo: 'meta',
          logoWidth: 120,
          company: 'Meta',
          review:
            'Per molti anni, eBPF ha giocato un ruolo critico nell’accelerazione dello sviluppo del kernel. Siamo entusiasti di sostenere il lavoro della comunità eBPF, aiutandoli a costruire gli strumenti necessari per alimentare la futura generazione di sviluppo dei sistemi Linux.',
          author: 'Chris Mason',
          role: 'Kernel Maintainer and Engineering Director at Facebook, 2021',
        },
        {
          logo: 'netflix',
          logoWidth: 109,
          company: 'Netflix',
          review:
            'eBPF è un nuovo tipo di software che offre capacità superpotenti, dando vita a un settore di tecnologie di rete, prestazioni, e sicurezza. Netflix è stata pioniera nell’uso di eBPF per l’osservabilità, fornendo informazioni su innumerevoli aree che erano precedentemente difficili o proibitivamente costose da strumentare. eBPF ci ha aiutato a ridurre la latenza delle applicazioni e a risparmiare sui costi.',
          author: 'Brendan Gregg',
          role: 'Senior performance engineer at Netflix, 2021',
        },
      ],
    },
    features: {
      title: 'Cosa è possibile fare con eBPF?',
      items: [
        {
          bgClassName: 'bg-secondary-yellow-light',
          image: 'networking',
          title: 'Rete',
          description:
            'Elaborazione veloce dei pacchetti di rete senza lasciare lo spazio kernel. Aggiungere ulteriori parser di protocollo e programmare facilmente logiche di inoltro per soddisfare requisiti in continua evoluzione',
        },
        {
          bgClassName: 'bg-secondary-green-light',
          image: 'observability',
          title: 'Osservabilità',
          description:
            'Raccolta e aggregazione delle metriche personalizzate in-kernel con generazione di eventi di visibilità e strutture dati da un’ampia gamma di possibili fonti senza dover esportare campioni.',
        },
        {
          bgClassName: 'bg-secondary-blue-light',
          image: 'tracingAndProfiling',
          title: 'Tracciamento e Profilazione',
          description:
            'Collega i programmi eBPF ai punti di tracciamento e ai punti sonda del kernel e delle applicazioni utente, e sfrutta potenti capacità di introspezione e approfondimenti unici per la risoluzione dei problemi di prestazioni del sistema.',
        },
        {
          bgClassName: 'bg-secondary-red-light',
          image: 'security',
          title: 'Sicurezza',
          description:
            'Combina la visione e la comprensione di tutte le chiamate di sistema con una osservabilità a livello di pacchetto e di socket di tutto il networking per creare sistemi di sicurezza che operano in un contesto più ampio e con un migliore livello di controllo.',
        },
      ],
    },
    videoGallery: {
      title: 'Talks della community eBPF',
      items: videoItems,
    },
  },
  'zh-cn': {
    hero: {
      title: '动态地编程内核以实现高效的网络、可观测性、追踪和安全性。',
      blackButtonTitle: '项目概览',
      blackButtonUrl: '/zh-cn/applications',
      yellowButtonTitle: '什么是 eBPF',
      yellowButtonUrl: '/zh-cn/what-is-ebpf',
      altImage: 'eBPF diagram',
      items: [
        '程序经过验证，确保安全执行',
        '在内核中的任何位置配置钩子进行功能的修改',
        'JIT 编译器可以实现接近直接运行机器码的速度',
        '可以动态增加系统功能',
      ],
    },
    caseStudies: {
      title: '在各行各业的生产环境中使用 eBPF 的组织',
      linkText: '更多案例研究',
      linkUrl: '/zh-cn/case-studies/',
      items: caseStudiesData['zh-cn'].slice(0, 6),
    },
    whyEbpf: {
      title: '为什么使用 eBPF ?',
      linkTitle: '什么是 eBPF',
      linkUrl: '/zh-cn/what-is-ebpf/',
      items: [
        {
          title: '性能',
          icon: 'performance',
          description: 'eBPF 通过 JIT 编译以及运行在内核空间中，可以大幅提高处理能力。',
        },
        {
          title: '安全',
          icon: 'security',
          description: 'eBPF 程序经过验证，不会导致内核崩溃，并且只能由特权用户进行修改。',
        },
        {
          title: '灵活性',
          icon: 'flexibility',
          description: '功能和用例的修改、增加即时加载到内核并生效，而不需要重启或者打补丁。',
        },
      ],
    },
    film: {
      label: 'premiere',
      title: '释放内核潜力',
      videoId: 'Wb_vD3XZYOA',
      description:
        'eBPF 纪录片对 eBPF 的起源进行了深入的挖掘探索，并展示了这一行业变革技术的故事、挑战和回报。在这里您将听到开源世界中最杰出的一些人的演讲，其中包括了来自 Meta、Intel、Isovalent、Google、Red Hat 和 Netflix 的关键合作伙伴们，是他们帮助塑造和构建的工具推动了 eBPF 的成功和推广采用，。',
      buttonText: 'eBPF 纪录片',
      buttonUrl: 'https://ebpfdocumentary.com/',
    },
    testimonials: {
      items: [
        {
          logo: 'azure',
          logoWidth: 134,
          company: 'Microsoft Azure',
          review:
            'eBPF带来了新一代的工具，通过它开发人员可以轻松地诊断问题、快速地创新和扩展操作系统的功能。',
          author: 'Mark Russinovich',
          role: 'Chief Technology Officer at Microsoft Azure, 2021',
        },
        {
          logo: 'google',
          logoWidth: 104,
          company: 'Google',
          review:
            'eBPF 是 Linux 内核网络实现的未来，谷歌公司也很高兴可以成为其创建的不断发展的标准的一部分。',
          author: 'Chris DiBona',
          role: 'Director of Open Source at Google, 2021',
        },
        {
          logo: 'isovalent',
          logoWidth: 148,
          company: 'Isovalent',
          review:
            '尽管 eBPF 已经进入了很多企业的生产技术栈中，但我们仍然处于 eBPF 这项技术开启的创新浪潮的起始阶段。',
          author: 'Thomas Graf',
          role: 'Chief Technology Officer at Isovalent, 2021',
        },
        {
          logo: 'meta',
          logoWidth: 120,
          company: 'Meta',
          review:
            '多年以来, eBPF 在加速内核开发方面发挥了关键作用。我们很高兴能够支持eBPF社区的工作, 为Linux系统的开发提供所需要的、强有力的工具。',
          author: 'Chris Mason',
          role: 'Kernel Maintainer and Engineering Director at Facebook, 2021',
        },
        {
          logo: 'netflix',
          logoWidth: 109,
          company: 'Netflix',
          review:
            'eBPF是一种新型软件, 它提供了强大的功能, 催生了一个专注于网络、性能和安全的技术行业。Netflix 率先将 eBPF 用于可观测性中, 提供了对很多领域的观测和洞察, 而要观测到这些领域以前很难或代价非常昂贵。eBPF 帮助我们降低了应用程序延迟, 找到节省成本的方式。',
          author: 'Brendan Gregg',
          role: 'Senior performance engineer at Netflix, 2021',
        },
      ],
    },
    features: {
      title: 'eBPF 有哪些可能性 ?',
      items: [
        {
          bgClassName: 'bg-secondary-yellow-light',
          image: 'networking',
          title: '网络',
          description:
            '通过在内核空间中进行数据包传输加快处理速度。可以添加额外的协议解析器，并轻松地编程构建转发逻辑以满足不断变化的需求。',
        },
        {
          bgClassName: 'bg-secondary-green-light',
          image: 'observability',
          title: '可观测性',
          description:
            '收集并在内核内聚合自定义指标，从各种可能的来源生成可见性事件和数据结构，而无需导出数据样本。',
        },
        {
          bgClassName: 'bg-secondary-blue-light',
          image: 'tracingAndProfiling',
          title: '追踪和分析',
          description:
            '将 eBPF 程序附加到跟踪点、内核中以及用户应用程序的探测点上，可以赋予它们强大的自查能力和独特的洞察力来排查系统性能问题。',
        },
        {
          bgClassName: 'bg-secondary-red-light',
          image: 'security',
          title: '安全',
          description:
            '结合对所有系统调用的观察理解和对所有网络的数据包/套接字级别的视图，用以创造拥有更全面上下文和更好控制水平的安全系统。',
        },
      ],
    },
    videoGallery: {
      title: 'eBPF 社区演讲',
      items: videoItems,
    },
  },
  sw: {
    hero: {
      title:
        'Panga kernel kwa uthabiti kwa ajili ya utendakazi bora wa mtandao, uangalizi, ufuatiliaji na usalama',
      blackButtonTitle: 'Mandhari ya Mradi',
      blackButtonUrl: '/sw/applications',
      yellowButtonTitle: 'Ni nini eBPF',
      yellowButtonUrl: '/sw/what-is-ebpf',
      altImage: 'eBPF diagram',
      items: [
        'Programu zimethibitishwa kwamba zinatekelezwa na usalama',
        'Ungana na kiini(kernel) popote ndo uwe na uwezo wa kubadishile kazi linalofanya',
        'Kompileri(Compiler) cha JIT kwa kasi ya utekelezaji karibu na asilia',
        'Ongeza uwezo wa OS wakati wa utekelezaji',
      ],
    },
    caseStudies: {
      title: 'Mashirika katika kila tasnia hutumia eBPF katika uzalishaji',
      linkText: 'Masomo zaidi',
      linkUrl: '/sw/case-studies/',
      items: caseStudiesData.sw.slice(0, 6),
    },
    whyEbpf: {
      title: 'Kwa nini eBPF?',
      linkTitle: 'Ni nini eBPF',
      linkUrl: '/sw/what-is-ebpf/',
      items: [
        {
          title: 'Utendezi',
          icon: 'performance',
          description:
            'eBPF inaboresha sana usindikaji kwa Kompileri cha JIT na kufanya kazi moja kwa moja ndani ya kiini.',
        },
        {
          title: 'Usalama',
          icon: 'security',
          description:
            'Programu za eBPF zimehakikishwa kutokwamisha kiini na zinaweza kubadilishwa tu na watumiaji wenye mamlaka.',
        },
        {
          title: 'Upanuzi',
          icon: 'flexibility',
          description:
            'Badili au ongeza utendaji na matumizi wa kiini bila kulazimika kuanzisha upya au kuipachika.',
        },
      ],
    },
    film: {
      label: 'premiere',
      title: 'Unlocking the Kernel',
      videoId: 'Wb_vD3XZYOA',
      description:
        'The eBPF Documentary provides an in-depth exploration on the origins of eBPF and showcases the stories, challenges, and rewards of this industry changing technology. You will hear from the best and brightest in the open source world, including key stakeholders from Meta, Intel, Isovalent, Google, Red Hat, and Netflix, who helped shape and build the tools that drove the success and adoption of eBPF.',
      buttonText: 'eBPF Documentary Website',
      buttonUrl: 'https://ebpfdocumentary.com/',
    },
    testimonials: {
      items: [
        {
          logo: 'azure',
          logoWidth: 134,
          company: 'Microsoft Azure',
          review:
            'eBPF imesababisha kizazi kipya cha zana ambazo huruhusu waendelezaji kubaini na  kutatua matatizo kwa urahisi, kubuni haraka, na kuongeza utendaji wa mfumo wa uendeshaji kwa urahisi.',
          author: 'Mark Russinovich',
          role: 'Chief Technology Officer at Microsoft Azure, 2021',
        },
        {
          logo: 'google',
          logoWidth: 104,
          company: 'Google',
          review:
            'eBPF ndiyo mustakabali wa mtandao kwa kiini cha Linux, na Google inafurahia kushuhudia na kushiriki katika kuweka kiwango cha msimamo.',
          author: 'Chris DiBona',
          role: 'Director of Open Source at Google, 2021',
        },
        {
          logo: 'isovalent',
          logoWidth: 148,
          company: 'Isovalent',
          review:
            'Ingawa eBPF tayari imeingia katika mifumo ya uzalishaji ya makampuni mengi, bado tuko mwanzoni mwa mzunguko wa ubunifu ambao teknolojia ya eBPF inawezesha.',
          author: 'Thomas Graf',
          role: 'Chief Technology Officer at Isovalent, 2021',
        },
        {
          logo: 'meta',
          logoWidth: 120,
          company: 'Meta',
          review:
            'Kwa miaka mingi, eBPF imecheza jukumu muhimu katika kuongeza kasi ya maendeleo ya kiini. Tunafurahi kuunga mkono kazi ya jamii ya eBPF, kuwaruhusu kujenga zana wanazohitaji kwa ajili ya kuendesha kizazi kijacho cha maendeleo ya mfumo wa Linux.',
          author: 'Chris Mason',
          role: 'Kernel Maintainer and Engineering Director at Facebook, 2021',
        },
        {
          logo: 'netflix',
          logoWidth: 109,
          company: 'Netflix',
          review:
            'eBPF ni aina mpya ya programu inayotoa uwezo mkubwa, na kuzaa tasnia ya teknolojia za mtandao, utendaji, na usalama. Netflix imeongoza matumizi ya eBPF kwa ufuatiliaji, kutoa ufahamu katika maeneo mengi ambayo awali ilikuwa ngumu au ghali sana kuweka vifaa vya ufuatiliaji. eBPF imetusaidia kupunguza kucheleweshwa kwa maombi katika programu na kupata akiba za gharama.',
          author: 'Brendan Gregg',
          role: 'Senior performance engineer at Netflix, 2021',
        },
      ],
    },
    features: {
      title: 'Je, ni nini kinachowezekana na eBPF?',
      items: [
        {
          bgClassName: 'bg-secondary-yellow-light',
          image: 'networking',
          title: 'Mtandao',
          description:
            'Kusindika pakiti kwa kasi bila kuacha nafasi katika kiini. Ongeza mchambuzi(parsers) wa itifaki za ziada na programu kwa urahisi mantiki yoyote ya usambazaji ili kukidhi mahitaji yanayobadilika.',
        },
        {
          bgClassName: 'bg-secondary-green-light',
          image: 'observability',
          title: 'Ufuatiliaji',
          description:
            'Ukusanyaji na umoja wa takwimu za kawaida ndani ya kiini na kuzalisha matukio na miundo ya data kutoka vyanzo vingi iwezekanavyo bila kuhitaji kusafirisha sampuli nje.',
        },
        {
          bgClassName: 'bg-secondary-blue-light',
          image: 'tracingAndProfiling',
          title: 'Ufuatiliaji na Uchambuzi',
          description:
            'Ambatanisha programu za eBPF na vituo vya ufuatiliaji pamoja na vituo vya uchunguzi vya programu za kiini na watumiaji, kutoa uwezo mkubwa wa kuchunguza na ufahamu wa pekee katika kutatua matatizo ya utendaji wa mfumo.',
        },
        {
          bgClassName: 'bg-secondary-red-light',
          image: 'security',
          title: 'Usalama',
          description:
            'Unakutanisha kuona na kuelewa wito zote za mfumo pamoja na mtazamo wa mtandao wa pakiti na soketi ili kuunda mifumo ya usalama inayofanya kazi kwa muktadha zaidi na kiwango bora cha udhibiti.',
        },
      ],
    },
    videoGallery: {
      title: 'Mazungumzo ya Jumuiya ya eBPF',
      items: videoItems,
    },
  },
};

export default data;
