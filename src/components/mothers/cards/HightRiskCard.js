import React from 'react';
import {Card} from '../mother-style';

export default function HighRiskCard({mother}) {
    return (
        <Card>
            <div className="card-content ">
                <ul className="align-right">
                    <li>C-section</li>
                    <li>Anemia</li>
                    <li>Malaria</li>
                    <li>Obstructed labor</li>
                    <li>Malpresentation</li>
                    <li>Hemorrhage</li>
                  <div className="list-break">
                    <li>Retained placenta</li>
                    <li>Placenta previa</li>
                    <li>Stillbirth</li>
                    <li>Other complication</li>
                  </div>
                </ul>
                <ul className="align-right values high-risk-card">
                    <li>{true ? <p className="status-yes">YES</p> : <p className="status-no">NO</p>}</li>
                    <li>{mother.anemia
                        ? <p className="status-yes">YES</p>
                        : <p className="status-no">NO</p>}
                    </li>
                    <li>{mother.malaria
                        ? <p className="status-yes">YES</p>
                        : <p className="status-no">NO</p>}</li>
                    <li>{mother.obstructed_labor
                        ? <p className="status-yes">YES</p>
                        : <p className="status-no">NO</p>}
                    </li>
                    <li>{mother.malpresent
                        ? <p className="status-yes">YES</p>
                        : <p className="status-no">NO</p>}
                    </li>
                    <li>{false ? <p className="status-yes">YES</p> : <p className="status-no">NO</p>}</li>
                  <div className="list-break-values">
                    <li>{false ? <p className="status-yes">YES</p> : <p className="status-no">NO</p>}</li>
                    <li>{mother.placenta_previa
                        ? <p className="status-yes">YES</p>
                        : <p className="status-no">NO</p>}
                    </li>
                    <li>{true ? <p className="status-yes">YES</p> : <p className="status-no">NO</p>}</li>
                    <li>{mother.other_complication
                        ? <p className="status-yes">YES</p>
                        : <p className="status-no">NO</p>}
                    </li>
                  </div>
                </ul>
            </div>
        </Card>
    )
}