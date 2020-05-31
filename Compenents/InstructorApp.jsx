import React, { Component } from 'react';

import ListePatient from './ListePatient'
import ListePatientothmane from './ListePatientothmane'
import AfficherPatient1 from'./AfficherPatient1'
import Ajouterconsu from './Ajouterconsu'
import Afficherbyname from './Afficherbynomprenom'
import Affichebycin from './Affichebycin'
import Afficherbynum from './Afficherbynum'
import Formulaire from './Formulaire'
import Authentification from './Authentification'
import Carousel2 from './Carousel'
import Medecin from './Medecin'
import Acceuil from './Acceuil'
import FAQ from './FAQ'
import qu1 from './qu1'
import qu2 from './qu2'
import qu3 from './qu3'
import qu4 from './qu4'
import qu5 from './qu5'
import Admin from './Admin'
import Medbyname from './Medbyname'
import Medbycin from './Medbycin'
import Medbyspec from './Medbyspec'
import AfficherPatient1othmane from './AfficherPatient1othmane'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function ErrorComponent() {
    return <div>Erreur, le lien entré n'est pas disponible!</div>
}
class InstructorApp extends Component {
    
    render() {
        return (
            <Router>
            <>
                <Switch>
                    <Route path="/start" exact component={Acceuil} />  
                    <Route path="/login" exact component={Authentification} />
                    <Route path="/" exact component={Acceuil} />
                    <Route path="/aa" exact component={ListePatient} />
                    <Route path="/patients/:id" component={AfficherPatient1} /> 
                    <Route path="/patientsbycin/:cin" component={Affichebycin} />
                    <Route path="/patientsbynum/:num" component={Afficherbynum} />
                    <Route path="/patientsbyname/:nom/:prenom" component={Afficherbyname} />
                    <Route path="/medbyname/:nom/:prenom" component={Medbyname} />
                    <Route path="/medbycin/:cin" component={Medbycin} />
                    <Route path="/medbyspec/:spec" component={Medbyspec} />
                    <Route path="/ajouter" component={Formulaire}/>
                    <Route path="/medecin" component={Medecin}/>
                    <Route path="/admin" component={Admin}/>
                    <Route path="/faq" component={FAQ}/>
                    <Route path="/qu1" component={qu1}/>
                    <Route path="/qu2" component={qu2}/>
                    <Route path="/qu3" component={qu3}/>
                    <Route path="/qu4" component={qu4}/>
                    <Route path="/qu5" component={qu5}/>
                    <Route path="/car" component={Carousel2}/>
                    <Route path="" component={ErrorComponent}/>
                </Switch>
            </>
        </Router>
        )
    }
}

export default InstructorApp