
import { Container } from "./style";
import FbImageLibrary from 'react-rt-image-grid'

export const GridImage = () => {
    const src = [
        "https://hansa.house/f/gallery/original/79e9b5ae19b4669ec7c8f8fc577cb6d2.jpg",
        "https://markstewart.com/wp-content/uploads/2021/04/1_SB4-Front-View.jpg",
        // "https://static.onecms.io/wp-content/uploads/sites/37/2016/02/15230656/white-modern-house-curved-patio-archway-c0a4a3b3.jpg",
        // "https://hansa.house/f/gallery/original/79e9b5ae19b4669ec7c8f8fc577cb6d2.jpg",
        // "https://markstewart.com/wp-content/uploads/2021/04/1_SB4-Front-View.jpg",
        // "https://static.onecms.io/wp-content/uploads/sites/37/2016/02/15230656/white-modern-house-curved-patio-archway-c0a4a3b3.jpg",
    ]
    return (
        <Container>
            <FbImageLibrary
                images={src}
                countFrom={5}
                hideOverlay={false}
                renderOverlay={()=><div>Image Farrux</div>}
            />
        </Container>
    );
}