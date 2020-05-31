<Tab eventKey="consults" title="Consultations">
                        <div style={{borderRadius: "10px",width: "550px",position: "absolute", left:"73px",top: "80px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                            <table className="table" >
                                <thead>
                                    <tr>
                                        <th>Identifiant de consultation</th>
                                        <th>Identifiant de medecin</th>
                                        <th>Date de consultation</th>
                                        <th>Observation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.Consultations.map(
                                    consultation =>
                                        <tr key={consultation.idConsultation}>
                                            <td>{consultation.idConsultation}</td>
                                            <td>{consultation.medi}</td>
                                            <td>{consultation.date}</td>
                                            <td>{consultation.observation}</td>
                                        </tr>)
                                }
                                </tbody>
                            </table>
                        </div>
                    </Tab>
                    <Tab eventKey="pres" title="Prescriptions">
                        <div style={{borderRadius: "10px",width: "550px",position: "absolute", left:"73px",top: "80px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                            <table className="table" >
                                <thead>
                                    <tr>
                                        <th>Identifiant de prescription</th>
                                        <th>Médicament prescris</th>
                                        <th>Date de début du traitement</th>
                                        <th>Date de fin du traitement</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.Prescriptions.map(
                                        prescription =>
                                        <tr key={prescription.idPres}>
                                            <td>{prescription.idPres}</td>
                                            <td>{prescription.médicament}</td>
                                            <td>{prescription.datedebut}</td>
                                            <td>{prescription.datefin}</td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </Tab>




<div className="container-fluid cadre" style={{borderRadius: "10px",width: "500px",height:"170px",position: "absolute", left:"390px",top: "70px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                    <div className="form-group">
                        <label style={{position:"absolute",left:"10px",top:"15px"}}>Recherche par nom</label>
                        <input className="form-control" type="text" name="nom" style={{width:"75px",position:"absolute",left:"160px",top:"12px",fontSize:"14px"}}/>
                        <label style={{position:"absolute",left:"245px",top:"15px"}}>Et prénom</label>
                        <input className="form-control" type="text" name="prenom" style={{width:"75px",position:"absolute",left:"320px",top:"12px",fontSize:"14px"}}/>
                        <button className="btn btn-success" style={{backgroundColor:"#435fbc", borderColor:"#435fbc",width:"75px",position:"absolute",left:"400px",top:"12px",fontSize:"12px"}}>Recherche</button>
                    </div>
                    <div className="form-group">
                        <label style={{position:"absolute",left:"10px",top:"65px"}}>Recherche par numéro</label>
                        <input className="form-control" type="text" name="idPatient" value={this.state.idPatient} onChange={this.handleChange} style={{width:"236px",position:"absolute",left:"160px",top:"62px",fontSize:"14px"}}/>
                        <button className="btn btn-success" onClick={() => this.afficherpatient(this.state.Patients.idPatient)} style={{backgroundColor:"#435fbc", borderColor:"#435fbc",width:"75px",position:"absolute",left:"400px",top:"62px",fontSize:"12px"}}>Recherche</button>
                    </div>
                    <div className="form-group">
                        <label style={{position:"absolute",left:"10px",top:"115px"}}>Recherche par CIN</label>
                        <input className="form-control" type="text" name="cin" value={this.state.cin} onChange={this.handleChange} style={{width:"236px",position:"absolute",left:"160px",top:"115px",fontSize:"14px"}}/>
                        <button className="btn btn-success" onClick={() => this.afficherpatient(this.state.Patients.cin)} style={{backgroundColor:"#435fbc", borderColor:"#435fbc",width:"75px",position:"absolute",left:"400px",top:"112px",fontSize:"12px"}}>Recherche</button>
                    </div>
                </div>