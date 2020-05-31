<div className="onglets" style={{borderRadius: "10px",width: "700px",height:"480px",position: "absolute", left:"540px",top: "110px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                    <Tabs defaultActiveKey="infosperso" id="uncontrolled-tab-example">

                        <Tab eventKey="infosperso" title="Informations personnelles">
                            <div style={{borderRadius: "10px",width: "550px",position: "absolute", left:"73px",top: "80px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                                <table className="table" >
                                    <thead>
                                        <tr>
                                            <th>Nom</th>
                                            <th>Prénom</th>
                                            <th>CIN</th>
                                            <th>Adresse</th>
                                            <th>Situation matrimoniale</th>
                                            <th>Origine</th>
                                            <th>Age</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>

                        </Tab>

                        <Tab eventKey="consults" title="Consultations">
                            <div style={{borderRadius: "10px",width: "550px",position: "absolute", left:"73px",top: "80px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                                <table className="table" >
                                    <thead>
                                        <tr>
                                            <th>Numéro de consultation</th>
                                            <th>Médecin traitant</th>
                                            <th>Date de consultation</th>
                                            <th>Observation</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </Tab>


                        <Tab eventKey="pres" title="Prescriptions">
                            <div style={{borderRadius: "10px",width: "550px",position: "absolute", left:"73px",top: "80px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                                <table className="table" >
                                    <thead>
                                        <tr>
                                            <th>Médicament prescrit</th>
                                            <th>Date de début du traitement</th>
                                            <th>Date de fin du traitement</th>
                                            <th>Motif de prescription</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </Tab>

                        <Tab eventKey="analyses" title="Analyses">
                            <div style={{borderRadius: "10px",width: "550px",position: "absolute", left:"73px",top: "80px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                                <table className="table" >
                                    <thead>
                                        <tr>
                                            <th>Taux de glycémie</th>
                                            <th>Tension artérielle</th>
                                            <th>Taux de Cholestérol</th>
                                            <th>Taux de Triglycérides</th>
                                            <th>Taux de Transaminases</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </Tab>
                    </Tabs>
               </div>

