import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}%`;
}

export default function DiscreteSlider({ miniRange = 0, maxiRange = 100, setFunction, funvalue }) {

    let steps = Math.max(1, Math.ceil((maxiRange - miniRange) / 100))

    return (

        <Box fullWidth>
            <Slider
                aria-label="Temperature"
                defaultValue={0}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={steps}
                marks
                min={miniRange}
                max={maxiRange}
                value={funvalue ? funvalue : miniRange}
                defaultValue={funvalue ? funvalue : miniRange}
                onChange={(e, value) => {
                    console.log("This is the values", value)
                    setFunction(value)
                }}
            />
            <div className="range-span"
                style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="mini-value">{miniRange}</span>
                <span className="maxi-value">{maxiRange}</span>
            </div>

        </Box>
    );
}