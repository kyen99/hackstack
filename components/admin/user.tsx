import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  DateField,
  TextField,
  EditButton,
  ImageField,
  TextInput,
  DateInput,
  ImageInput,
  useRecordContext,
} from 'react-admin'

export const UserList = () => (
  <List>
    <Datagrid>
      <TextField source='id' />
      <TextField source='name' />
      <TextField source='email' />
      <DateField source='emailVerified' />
      <ImageField source='image' />
      <EditButton />
    </Datagrid>
  </List>
)

const UserTitle = () => {
  const record = useRecordContext()
  return <span>User {record ? `"${record.name}"` : ''}</span>
}

export const UserEdit = () => (
  <Edit title={<UserTitle />}>
    <SimpleForm>
      <TextInput disabled source='id' />
      <TextInput source='name' />
      <TextInput multiline source='email' />
      <DateInput label='Validated date' source='emailValidated' />
      <ImageInput source='image' />
    </SimpleForm>
  </Edit>
)

export const UserCreate = () => (
  <Create title='Create a Post'>
    <SimpleForm>
      <TextInput source='name' />
      <TextInput source='email' />
      <TextInput label='Validated date' source='emailValidated' />
      <ImageInput source='image' />
    </SimpleForm>
  </Create>
)
