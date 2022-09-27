import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div>
            <h1>
                {'This Brain App will detect faces in your pictures'}
            </h1>

            <div className="center ">
                <div className="pa4 br3 shadow-5 center form ">
                    <input placeholder="Insert image Url"
                        name="ImgLink" className="f4 pa2 w-70 " />
                    <button className="w-30 grow link f4  
                    shadow-5 ph3 pv2 
            dib white bg-light-purple  "
                        formAction="submit"

                    >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm; 