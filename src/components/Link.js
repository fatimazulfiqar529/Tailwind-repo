import Solution from './Solution';
import Block from './Block';
import blockwurfel from '../assests/images/blockwurfel.svg';

function Link(){
    return(
        <>
        <div className="content mb-5">
            <Solution/>
<Block/>
<div class="blank">
    <h1></h1>
</div>

</div>
</>
    );
}
export default Link;