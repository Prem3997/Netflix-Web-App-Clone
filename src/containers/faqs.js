import { Accordion } from '../components'
import OptForm from '../components/opt-form'
import faqsData from '../fixtures/faqs.json'
import { useHistory } from 'react-router-dom'
import * as ROUTES from "../constants/routes"

export function FaqsContainer() {
    const history = useHistory()
    const buttonClicked = () => {
        history.push(ROUTES.SIGN_UP)
    }
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map(item =>
                <Accordion.Item key={item.id}>
                    <Accordion.Header>
                        {item.header}
                    </Accordion.Header>
                    <Accordion.Body>
                        {item.body}
                    </Accordion.Body>
                </Accordion.Item>
            )}
            <Accordion.Item />
            <OptForm>
                <OptForm.Text>
                    Ready to watch? Enter your email to create or restart your
                    mebership
                </OptForm.Text>
                <OptForm.Input placeholder='Email address' />
                <OptForm.Button onClick={() => buttonClicked()}>Try it now</OptForm.Button>
                <OptForm.Break />
            </OptForm>
        </Accordion>
    )
}