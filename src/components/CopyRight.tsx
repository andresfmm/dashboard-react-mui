// NATIVE


// INSTALLED
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


// CUSTOM

export const CopyRight = (props: any) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link target="_blank" color="inherit" href="#">
        copyright
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
