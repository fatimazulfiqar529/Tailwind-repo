
import Grid from './Grid';
import Group135 from '../assests/images/Group135.svg'
function Obj(){
    return(
        <div className='item d-flex flex-column justify-content-center align-items-center text-center gap-3 ps-5 mt-5 pt-5 mb-5'>
            <p id="headline">Creating Brand That Resonate</p>
            <img id="dot" src={Group135}></img>
            <p id="desc">Branding Is Not Just A Logo Or Tagline; It's An Identity. It Is Proven By The Fact That Brand Awareness Is The Top Goal For 89% Of Marketers. Trust In A Brand Encourages 81% Of Consumers To Purchase, And Consistent Branding Can Increase Revenues By 23%.</p>

            <Grid/>
        </div>
            );
}
export default Obj;