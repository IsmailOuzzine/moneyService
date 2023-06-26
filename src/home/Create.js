import { useState } from "react";

const Create = (idType, idNum, nationality) => {

    const occupations = ['Slarié', 'Sans profession', '', ''];

    const [endValidity, setEndValidity] = useState('');
    const [title, setTitle] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [occupation, setOccupation] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    return ( 
        <div className="container-fluid">
            <h1 className="title">Nouveau Client</h1>
            <div className="card">
                <div className="card-header">
                    <i className="bi bi-person-fill"></i>
                    <p className="d-inline-block">Informations Client</p>
                </div>

                <div className="card-body">
                    <form>
                        <div className="row">

                            <div className="col-md">
                                <div className="form-group">
                                    <label htmlFor="idType">Type de document :</label>
                                    <input type="text" value={idType} required disabled />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="idNum">Num d'identification :</label>
                                    <input type="text" value={idNum} required disabled />
                                </div>
                                {idType == 'PP' && <div className="form-group">
                                    <label htmlFor="nationality">Nationalité :</label>
                                    <input type="text" value={nationality} required disabled/>
                                </div>}
                                <div className="form-group">
                                    <label htmlFor="endValidity">Valide jusqu'à :</label>
                                    <input type="date" value={endValidity} required onChange={e => setEndValidity(e.target.value)} />
                                </div>
                            </div>

                            <div className="col-md">
                                <div className="form-group">
                                    <label htmlFor="title">Titre :</label>
                                    <input type="radio" name="title" value={title} checked={title == 'MR'} onChange={setTitle('MR')}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="firstName">Prénom :</label>
                                    <input type="text" value={firstName} required onChange={e => setFirstName(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Nom :</label>
                                    <input type="text" value={lastName} required onChange={e => setLastName(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="birthDate">Date Naissance :</label>
                                    <input type="date" value={birthDate} required onChange={e => setBirthDate(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Adresse :</label>
                                    <input type="text" value={address} required onChange={e => setAddress(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">Ville :</label>
                                    <input type="text" value={city} required onChange={e => setCity(e.target.value)}/>
                                </div>
                            </div>

                            <div className="col-md">
                                <div className="form-group">
                                    <label htmlFor="occupation">Profession</label>
                                    <select 
                                    value={occupation}
                                    onChange={(e) => {setOccupation(e.target.value)}}
                                    >
                                        {occupations.map(o => (
                                            <option value={o}>{ o }</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone :</label>
                                    <input type="text" value={phone} required onChange={e => setPhone(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-warning">Envoi Code Vérification</button>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email :</label>
                                    <input type="email" value={email} required onChange={e => setEmail(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <button>Enregistrer</button>
        </div>
     );
}
 
export default Create;