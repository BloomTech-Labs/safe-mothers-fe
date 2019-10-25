import React from 'react';
import {Card} from '../mother-style'

export default function HighRiskCard({mother}) {
    return (
        <Card>
            <div className="card-content">
                <ul className="align-right">
                    <li>C-section</li>
                    <li>Anemia</li>
                    <li>Malaria</li>
                    <li>Obstructed labor</li>
                    <li>Malpresentation</li>
                    <li>Hemorrhage</li>
                    <li>Retained placenta</li>
                    <li>Placenta previa</li>
                    <li>Stillbirth</li>
                    <li>Other complication</li>
                </ul>
                <ul className="align-right">
                    <li>{true ? <li className="status-yes">YES</li> : <li className="status-no">NO</li>}</li>
                    <li>{mother.anemia ? <li className="status-yes">YES</li> :
                        <li className="status-no">NO</li>}</li>
                    <li>{mother.malaria ? <li className="status-yes">YES</li> :
                        <li className="status-no">NO</li>}</li>
                    <li>{mother.obstructed_labor ? <li className="status-yes">YES</li> :
                        <li className="status-no">NO</li>}</li>
                    <li>{mother.malpresent ? <li className="status-yes">YES</li> :
                        <li className="status-no">NO</li>}</li>
                    <li>{false ? <li className="status-yes">YES</li> : <li className="status-no">NO</li>}</li>
                    <li>{false ? <li className="status-yes">YES</li> : <li className="status-no">NO</li>}</li>
                    <li>{mother.placenta_previa ? <li className="status-yes">YES</li> :
                        <li className="status-no">NO</li>}</li>
                    <li>{true ? <li className="status-yes">YES</li> : <li className="status-no">NO</li>}</li>
                    <li>{mother.other_complication ? <li className="status-yes">YES</li> :
                        <li className="status-no">NO</li>}</li>
                </ul>
            </div>
        </Card>
    )
}