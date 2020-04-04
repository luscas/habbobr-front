import React from 'react';

function Sidebar() {
    return (
        <div className="col-md-3 pr-md-3">
            <div className="sidebar">
                <div id="custom_widget_publicidades-2" className="widget widget_custom_widget_publicidades mb-4">
                    <div className="section-title">
                        <h3>Publicidades</h3>
                    </div>

                    <div id="carouselAds" className="carousel ads slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselAds" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselAds" data-slide-to="1" className=""></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/uploads/2020/01/baccons.png" alt="Habbo Hotel" />
                                <div className="carousel-caption">
                                    <h5>Habbo Hotel</h5>
                                    <div>Um lugar divertido com gente incrível.</div>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <img src="/uploads/2020/01/baccons.png" alt="Baccons" />
                                <div className="carousel-caption">
                                    <h5>Baccons</h5>
                                    <div>Uma viagem nostálgica</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="custom_widget_parceiro-2" className="widget widget_custom_widget_parceiro mb-4">
                    <div className="section-title">
                        <h3>Parceiros</h3>
                    </div>

                    <div className="card">
                        <div className="card-body text-muted pixel d-flex justify-content-center align-items-center">
                            <div className="px-2" data-toggle="tooltip" data-original-title="Puhekupla">
                                <img src="/uploads/2020/03/duck.png" alt="Puhekupla" />
                            </div>
                            <div className="px-2" data-toggle="tooltip" data-original-title="Habborator">
                                <img src="/uploads/2020/03/hb.png" alt="Habborator" />
                            </div>
                            <div className="px-2" data-toggle="tooltip" data-original-title="Habbies">
                                <img src="/uploads/2020/03/hbs.png" alt="Habbies" />
                            </div>
                            <div className="px-2" data-toggle="tooltip" data-original-title="HabboTravel">
                                <img src="/uploads/2020/03/ht.png" alt="HabboTravel" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;