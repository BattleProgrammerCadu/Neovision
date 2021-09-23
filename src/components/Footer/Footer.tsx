import { useState } from 'react';
import api from '../../services/api';
import styles from '../../styles/footer.module.scss';

const Footer = () =>{
    const [name, setNome] = useState('');
    const [email, setEmail] = useState('');

    const handleName= (event: any) =>{
        setNome(event.target.value);
    }
    const handleEmail = (event: any) =>{
        setEmail(event.target.value);
    }

    const handleSubmit = async() =>{
        const info = {
            name,
            email
        }
        try{
            const result = await api.post('dev/register', info, { headers: { Authorization: `gabrielgualbertooliveira@gmail.com`}});
            console.log(result);
        }catch{
            console.log('deu ruim');
        }
    }
    return(
        <>
            <div className={styles.footer} id='footer'>
                <h3>Quer conhecer mais sobre o Neovision?</h3>
                <div className={styles.form}>
                    <input type="text" name="nome" id="nome" placeholder='Nome' onChange={handleName}/>
                    <input type="text" name="email" id="email" placeholder='Email' onChange={handleEmail} />
                    <button type="submit" onClick={handleSubmit}>Enviar</button>
                </div>
            </div>
            <div className={styles.bottom}>
                    <p>©2019 - Neovision. Todos os direitos reservados</p>
            </div>
        </>
    )
}

export default Footer;