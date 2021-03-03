import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Grommet, Box, Heading, Text } from "grommet";
import Theme from './Theme'
import RichTextEditor from "./components/RichTextEditor";

import StripeCardEditor from "./components/StripeCardEditor";
import TextAvatarEditor from "./components/TextAvatarEditor";

const Video = props => {
    const [cardError, setCardError] = React.useState("");
    // const [editorState, setEditorState] = useState(BraftEditor.createEditorState(''))
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => printSubmittedValue(data);

    const printSubmittedValue = async (e) => {
        const data = new FormData();
        data.append('images', e.images);
        console.log(e.images)
    };

    const onCardChange = ({ error }) => {
        if (error) {
            setCardError(error.message);
        } else {
            setCardError("");
        }
    };

    return (
        // style={{ width: '500px', height: '700px' }}
        <div className='container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grommet theme={Theme} style={{ height: "50vh", width: '100%' }} >
                    <Box>
                        <Heading level="2" >
                            {" "}
                        </Heading>
                        <h2 >Camara</h2>
                    </Box>
                    <Box>

                        <RichTextEditor style={{ width: '100px' }}
                            onSubmit={printSubmittedValue}
                        // name='images'
                        // ref={register({ required: true })}
                        />
                        <button style={{
                            width: '80px',
                            position: 'absolute', left: "286px",
                            top: " 130px"
                        }} type="submit" class="btn btn-info btn-dark">Submit</button>
                    </Box>
                </Grommet>

            </form>
        </div>

    )
}

export default Video


{/* <Box>
                    <Heading level="2" margin={{ bottom: "none" }}>
                        {" "}

                    </Heading>
                    <h2> Stripe Card Editor</h2>
                </Box>
                <Box>
                    <StripeCardEditor onChange={onCardChange} />
                    {cardError && (
                        <Text
                            margin={{ horizontal: "small" }}
                            alignSelf="start"
                            color="error"
                        >
                            {cardError}
                        </Text>
                    )}
                </Box> */}
{/* <Box>
                        <Heading level="2" margin={{ bottom: "none" }}>
                            {" "}
                            <h2 style={{ float: 'left' }}>Camara</h2>
                        </Heading>

                    </Box>
                    <Box>
                        <TextAvatarEditor
                            placeholder="Your two cents buddy ..."
                            onSubmit={printSubmittedValue}
                        />
                    </Box> */}