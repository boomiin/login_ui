import './App.css';
import Gas from './gas.mp4';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
          <div className="col-md-6 illustration-section">
            <video autoPlay muted loop id="myVideo">
              <source src={Gas} type="video/mp4" />
            </video>
          </div>
          <div className="col-md-6 login-section">
            <div className="form-section">
              <div className="row">
                <div className="col-12">
                  <h3 className="font-weight-bold title">Rechargez désormais votre carte de rechargement depuis votre compte eGas</h3>
                </div>
                
              </div>

              <div className="row">
                <div className="col-12">
                <h4 className="login-text">Connectez-vous</h4>
                </div>
              </div>
                
                <div className="mb-4">
                    <label htmlFor="identifiant" className="form-label">Identifiant :</label>
                    <input type="text" id="identifiant" className="form-control"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="mdp" className="form-label">Mot de passe :</label>
                    <input type="password" id="mdp" className="form-control"/>
                </div>
                
                <div className="col-12 col-md-12 my-3">
                    <button className="btn-block signin">Se connecter</button>
                </div>
                <div className="col-12 col-md-12 my-3">
                    <button className="btn-block signup">Créer un compte</button>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
