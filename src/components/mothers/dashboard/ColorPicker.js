import React, {useState} from 'react';
import {Palette} from "../mother-style";
import {theme} from "../../../App";

export default function ColorPicker({defineColor}) {
    const {palette} = theme;
    const {darkPalette} = theme;
    let colors = Object.keys(palette);
    const [active, setActive] = useState();

    const pickColor = (name, color, darkColor, box) => {
        setActive(box);
        if (name === "red" || name === "blue" || name === "deepPink"
            || name === "green" || name === "black" || name === "rebeccaPurple") {
            defineColor(color, darkColor, "white")
        } else defineColor(color, darkColor, "black")
    };

    return (
        <Palette>
            <p className="palette-label">Pick color</p>
            <div className="boxes">
                {colors && colors.map((color, index) =>
                    <span key={index} onClick={() => pickColor(color, palette[color], darkPalette[color], (index + 1))}
                          className="box">
                            <div className={active === (index + 1)
                                ? " active color box" + (index + 1)
                                : " color box" + (index + 1)}>
                            </div>
                        </span>)
                }
            </div>
        </Palette>
    )
}