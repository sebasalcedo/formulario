import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Component, Output, EventEmitter } from '@angular/core';
import { capt2 } from '../interfaces/questions.interfaces';

@Component({
  selector: 'app-capt2',
  templateUrl: './capt2.component.html',
  styleUrls: ['./capt2.component.css'],
})
export class Capt2Component {


  @Output() envioFormulario = new EventEmitter<capt2>();

  radioButton: string[] = [
    '1 .Visita a familiares o amigos',
    '2. Vacaciones (recreación, ocio, sol y playa)',
    '3. Compras',
    '4. Turismo Cultural',
    '5. Asistencia a eventos artísticos y/o deportivos destino',
    '6. Estudio y/o formación',
    '7. Tratamiento de salud y belleza',
    '8. Religioso',
    '9. Asistencia a Congresos, Seminarios, convenciones',
    '10. Trabajo remunerado en destino',
    '11. Trabajo o negocios (no remunerado en destino)',
    '12. Participación en eventos artísticos y/o deportivos',
    '13. Tránsito',
  ];

  checkButton7: string[] = [
    '1. Paquete turístico organizado por una agencia de viajes en Colombia',
    '2. Paquete turístico organizado por una agencia de viajes en el país de visita',
    '3. Paquete turístico organizado por terceros que no sean agencias de viajes',
    '4. Viaje organizado por cuenta propia',
    '5. otros',
  ];

  checkButton8: string[] = [
    '1. Alojamiento',
    '2. Transporte internacional',
    '3. Alimentos y bebidas (No incluidos en el alojamiento)',
    '4. Servicios culturales y de entretenimiento.',
    '5. Servicios deportivos y recreacionales (Ej.: Actividades de aventura, ecológicas, otros)',
    '6. Tours en destino (con servicio de guía)',
    '7. Transporte aéreo interno en el destino',
  ];

  listOptionSelect: string[] = [];

  listOptionPaquetes: string[] = [];

  public capt2Forms: FormGroup;

  constructor(private fb: FormBuilder) {
    this.capt2Forms = fb.group({
      q3_motivo_viaje: new FormControl(null, {
        validators: Validators.required,
        updateOn: 'blur',
      }),
      q4_como_organizo_viaje: new FormControl(null, {
        validators: Validators.required,
        updateOn: 'blur',
      }),
      q5_servicios_turisticos: new FormControl(null, {
        validators: Validators.required,
        updateOn: 'blur',
      }),
    });
  }

  questionSix(e: string) {
    console.log(e);
  }

  questionSeven(question7: string) {
    question7 = question7.trim().toLocaleLowerCase();
    if (!this.listOptionSelect.includes(question7)) {
      this.listOptionSelect.unshift(question7);

      this.listOptionSelect = this.listOptionSelect.splice(0, 10);
    } else {
      this.listOptionSelect = this.listOptionSelect.filter(
        (text) => text != question7
      );
    }
  }

  questionEight(question8: string) {
    question8 = question8.trim().toLocaleLowerCase();
    if (!this.listOptionPaquetes.includes(question8)) {
      this.listOptionPaquetes.unshift(question8);

      this.listOptionPaquetes = this.listOptionPaquetes.splice(0, 10);
    } else {
      this.listOptionPaquetes = this.listOptionPaquetes.filter(
        (text) => text != question8
      );
    }
  }

  ejecutarEvento() {
    this.envioFormulario.emit(this.capt2Forms.value);
  }
}
