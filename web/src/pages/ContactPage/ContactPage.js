import {
  Form,
  TextField,
  Submit,
  TextAreaField,
  FieldError,
  Label,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const [create] = useMutation(CREATE_CONTACT)

  const onSubmit = (data) => {
    console.log(data)
    create({ variables: { input: data } })
  }
  console.log('render!')

  return (
    <Form onSubmit={onSubmit} validation={{ mode: 'onBlur' }}>
      <Label name="name" errorClassName="error">
        Name
      </Label>
      <TextField
        name="name"
        validation={{ required: true }}
        errorClassName="error"
      />
      <FieldError className="error" name="name" />

      <Label name="email" errorClassName="error">
        E-mail
      </Label>
      <TextField
        name="email"
        validation={{
          required: true,
          pattern: {
            value: /[^@]+@[^.]+\..+/,
            message: '📧 Please, enter a valid e-mail address',
          },
        }}
        errorClassName="error"
      />
      <FieldError className="error" name="email" />

      <Label name="message" errorClassName="error">
        Message
      </Label>
      <TextAreaField
        name="message"
        validation={{ required: true }}
        errorClassName="error"
      />
      <FieldError className="error" name="message" />

      <br />
      <Submit>Save</Submit>
    </Form>
  )
}

export default ContactPage
