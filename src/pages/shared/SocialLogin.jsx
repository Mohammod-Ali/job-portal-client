import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';

const SocialLogin = () => {
    const {signInWithGoogle} = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div>
            <div className="divider">OR</div>
              <div className="text-center">
                  <button onClick={handleGoogleSignIn} className='btn'> <img className='w-9' src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" />Login with Google</button>
              </div>
          
        </div>
    );
};

export default SocialLogin;