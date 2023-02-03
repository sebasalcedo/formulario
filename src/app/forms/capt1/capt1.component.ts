import { Capt1Service } from './../services/capt1.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { capt1 } from './../interfaces/questions.interfaces';

@Component({
  selector: 'app-capt1',
  templateUrl: './capt1.component.html',
  styleUrls: ['./capt1.component.css'],
})
export class Capt1Component {

  @Output() envioFormulario = new EventEmitter<capt1>();

  public tipSex: string[] = ['M', 'F'];

  public itemQuestion4: string[] = [
    'solo',
    'Familia',
    'Compañeros de trabajo y/o estudio',
    'Amigos',
    'otros',
  ];

  public isDisabled: boolean = false;
  public isMenubloqueo: boolean = false;

  public capt1Forms: FormGroup;

  constructor(private fb: FormBuilder, private service: Capt1Service) {
    this.capt1Forms = fb.group({
      nombre: new FormControl(null, {
        validators: Validators.required,
        updateOn: 'blur',
      }),
      apellido: new FormControl(null, {
        validators: Validators.required,
        updateOn: 'blur',
      }),
      usuario: new FormControl(null, {
        validators: Validators.required,
        updateOn: 'blur',
      }),
      password: new FormControl(
        null,
        Validators.compose([
          Validators.minLength(5),
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        ])
      ),

      residencia: new FormControl(null, {
        validators: Validators.required,
        updateOn: 'blur',
      }),
      nacionalidad: new FormControl(null, {
        validators: Validators.required,
        updateOn: 'blur',
      }),
      sexo: new FormControl(null, {
        validators: Validators.required,
        updateOn: 'blur',
      }),
      edad: new FormControl(
        null,
        Validators.compose([Validators.required, Validators.pattern('[01]{8}')])
      ),

      q1_con_quien_viaja: new FormControl(
        null,
        Validators.compose([Validators.required])
      ),

      q2_cantidad_personas: new FormControl(
        null,
        Validators.compose([Validators.required])
      ),
    });
  }

  sexSeleccion(sexo: string) {
    this.capt1Forms.value.sexo = sexo;
  }

  question4(resp: string) {
    if (resp.trim() === 'otros') {
      this.isDisabled = true;
    } else if (resp.trim() === 'solo') {
      this.isDisabled = false;
      this.isMenubloqueo = true;
    }

    this.isDisabled = false;

    this.capt1Forms.value.q1_con_quien_viaja = resp;

    console.log(this.capt1Forms.value);
  }

  ejecutarEvento() {
    this.envioFormulario.emit(this.capt1Forms.value);
  }
}
