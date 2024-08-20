
const translations = {
    'br': {
        'title': 'Bem-vindo ao nosso site',
        'description': 'Esta é a versão em português.',
	'nav_home': 'Home',
	'nav_about': 'Sobre',
	'nav_services': 'Serviços',
	'nav_portifolio' : 'Portifólio',
	'nav_customers' : 'Clientes',
	'nav_contact': 'Contato',
	'slog_img_about' : 'Inovação em Cada Spray, Excelência em Cada Marca',
	'about_section' : 'SOBRE',
	'about_title': 'Transforme Suas Ideias em Produtos de Alta Tecnologia: Industrialize Conosco',
	'about_subtitle': 'Inovação em cosméticos em aerossol para um mercado exigente',
	'about_description' : 'Desenvolver sua marca própria de cosméticos nunca foi tão estratégico e vantajoso. Nossa indústria, localizada no coração do Brasil, em Goiás, oferece uma posição geográfica privilegiada para distribuição eficiente em todo o país. Somos especialistas em transformar produtos simples em soluções de alta tecnologia, agregando valor e inovação através de formulações em aerossol. Ao optar por criar sua marca conosco, você ganha acesso a uma infraestrutura de ponta e a um time comprometido com a excelência. Trabalhamos com as mais avançadas tecnologias para desenvolver produtos que atendem às expectativas dos consumidores modernos, oferecendo resultados superiores e maior aceitação no mercado. Faça parte do futuro da beleza com produtos que unem inovação, eficácia e qualidade. Industrialize conosco e conquiste um lugar de destaque no mercado de cosméticos em aerossol.'
    },
    'us': {
        'title': 'Welcome to our website',
        'description': 'This is the English version.',
	'nav_home': 'Home',
	'nav_about': 'About',
	'nav_services': 'Services',
	'nav_portifolio' : 'Portifolio',
	'nav_customers' : 'Customers',
	'nav_contact': 'Contact',
	'slog_img_about' : 'Innovation in Every Spray, Excellence in Every Brand',
	'about_section' : 'ABOUT',
	'about_title': 'Transform Your Ideas into High-Tech Products: Industrialize with Us',
	'about_subtitle': 'Innovation in aerosol cosmetics for a demanding market',
	'about_description' : 'Developing your own cosmetics brand has never been so strategic and advantageous. Our industry, located in the heart of Brazil, in Goiás, offers a privileged geographic position for efficient distribution throughout the country. We are experts in transforming simple products into high-tech solutions, adding value and innovation through aerosol formulations. When you choose to create your brand with us, you gain access to a cutting-edge infrastructure and a team committed to excellence. We work with the most advanced technologies to develop products that meet the expectations of modern consumers, offering superior results and greater market acceptance. Be part of the future of beauty with products that combine innovation, effectiveness and quality. Industrialize with us and gain a prominent place in the aerosol cosmetics market.'

	
    },
    'es': {
        'title': 'Bienvenue sur notre site',
        'description': 'Ceci est la version française.',
	'nav_home': 'Inicio',
	'nav_about': 'Acerca',
	'nav_services': 'Servicios',
	'nav_portifolio' : 'Portafólio',
	'nav_customers' : 'Clientes',
	'nav_contact': 'Contacto',
	'slog_img_about' : 'Innovación en cada spray, excelencia en cada marca',
	'about_section' : 'ACERCA',
	'about_title': 'Transforme sus ideas en productos de alta tecnología: industrialícese con nosotros',
	'about_subtitle': 'Innovación en cosmética en aerosol para un mercado exigente',
	'about_description' : 'Desarrollar tu propia marca de cosméticos nunca ha sido tan estratégico y ventajoso. Nuestra industria, ubicada en el corazón de Brasil, en Goiás, ofrece una posición geográfica privilegiada para una distribución eficiente en todo el país. Somos expertos en transformar productos simples en soluciones de alta tecnología, agregando valor e innovación a través de formulaciones en aerosol. Cuando eliges crear tu marca con nosotros, obtienes acceso a una infraestructura de vanguardia y un equipo comprometido con la excelencia. Trabajamos con las tecnologías más avanzadas para desarrollar productos que satisfagan las expectativas de los consumidores modernos, ofreciendo resultados superiores y mayor aceptación en el mercado. Sé parte del futuro de la belleza con productos que combinan innovación, eficacia y calidad. Industrialícese con nosotros y gane un lugar destacado en el mercado de la cosmética en aerosol.'

    }
};


function changeLanguage(lang) {
    
    document.getElementById('nav_home').textContent = translations[lang].nav_home;
    document.getElementById('nav_about').textContent = translations[lang].nav_about;
    document.getElementById('nav_services').textContent = translations[lang].nav_services;
    document.getElementById('nav_portifolio').textContent = translations[lang].nav_portifolio;
    document.getElementById('nav_customers').textContent = translations[lang].nav_customers;
    document.getElementById('nav_contact').textContent = translations[lang].nav_contact;
    document.getElementById('slog_img_about').textContent = translations[lang].slog_img_about;
    document.getElementById('about_section').textContent = translations[lang].about_section;
    document.getElementById('about_title').textContent = translations[lang].about_title;
    document.getElementById('about_subtitle').textContent = translations[lang].about_subtitle;
    document.getElementById('about_description').textContent = translations[lang].about_description;

}

// Detecta o idioma do navegador e altera a linguagem automaticamente
        function detectLanguage() {
            const userLang = navigator.language || navigator.userLanguage; // Ex: 'pt-BR'
            const langPrefix = userLang.split('-')[0]; // Ex: 'pt'

            if (langPrefix === 'pt') {
                changeLanguage('br');
            } else if (langPrefix === 'es') {
                changeLanguage('es');
            } else {
                changeLanguage('us');
            }
        }

        // Chama a função ao carregar a página
        window.onload = detectLanguage;

        // Eventos de clique para mudança manual de linguagem
        document.getElementById('br-flag').addEventListener('click', () => changeLanguage('br'));
        document.getElementById('us-flag').addEventListener('click', () => changeLanguage('us'));
        document.getElementById('es-flag').addEventListener('click', () => changeLanguage('es'));

