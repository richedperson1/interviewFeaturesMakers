
import TextField from '@mui/material/TextField';

const UserInputBox = ({ funValue, setFunction, name = 'functionCompo', defaultValue }) => {

    return (
        <>
            <TextField
                id="filled-number"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="standard"

                onChange={(event) => {
                    setFunction(Number(event.target.value));
                }}
                defaultValue={defaultValue}
                sx={{ overflow: "hidden", textAlign: "center", width: "100%" }}
            />
        </>
    )
}

export default UserInputBox;