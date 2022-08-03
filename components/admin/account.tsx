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

export const AccountList = () => (
  <List>
    <Datagrid>
      <TextField source='id' />
      <TextField source='userId' />
      <TextField source='type' />
      <TextField source='provider' />
      <TextField source='providerAccountId' />
      <TextField source='refresh_token' />
      <DateField source='expires_at' />
      <TextField source='token_type' />
      <TextField source='scope' />
      <EditButton />
    </Datagrid>
  </List>
)
