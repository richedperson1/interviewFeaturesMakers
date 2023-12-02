
import TextField from '@mui/material/TextField';
export default function SearchAppBar() {
    return (
        <>
            <div className="main-header pt-5">
                <div className="container flex justify-between">
                    <div className="text-box inline" style={{ display: "inline-block" }}>
                        <h1 style={{ display: "inline" }} className='text-white'>Logo Here</h1>
                    </div>
                    <div className="search-bar inline" style={{ display: "inline-block" }}>
                        <TextField id="standard-basic" label="Standard" variant="standard" sx={{ backgroundColor: "white" }} />
                    </div>
                    <div className="logo sm:hidden"></div>
                </div>
            </div>
        </>
    );
}