import React from 'react';

function Footer() {
    return (
        <div className="site-footer">
            <div className="container">
                <div className="menu-rodape-container">
                    <ul id="menu-rodape" className="menu">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-28 current_page_item menu-item-119">
                            <a href={"/"} aria-current="page">Início</a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-122">
                            <a href={"/"}>Sobre</a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-123">
                            <a href={"/"}>Notícias</a>
                        </li>
                        <li className="menu-item menu-item-type-post_type_archive menu-item-object-forum menu-item-195">
                            <a href={"/"}>Fórum</a>
                        </li>
                        <li className="menu-item menu-item-type-post_type_archive menu-item-object-galeria menu-item-196">
                            <a href={"/"}>Galeria</a>
                        </li>
                        <li className="menu-item menu-item-type-post_type_archive menu-item-object-evento menu-item-206">
                            <a href={"/"}>Eventos</a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-120">
                            <a href={"/"}>Contato</a>
                        </li>
                    </ul>
                </div>

                <div className="mb-3">
                    <strong>HabboBR.org</strong> © {new Date().getFullYear()}. Todos direitos reservados.
                </div>

                Esta fã site não está afiliada com, patrocinada por, apoiada por, ou principalmente aprovada pela Sulake Oy ou suas empresas Afiliadas.
                <br />
                Este fã site pode utilizar as marcas registradas e outras propriedades intelectuais do Habbo, que estão permitidas sob a Política de Fã Sites Habbo.
                <br />
                <br />

                Feito com amor por <a href={"https://marcocuel.com/"} className="text-white">Marco Cuel</a> e <a href={"http://github.com/luscas"} className="text-white">Lucas Bueno</a>
            </div>
        </div>
    );
}

export default Footer;