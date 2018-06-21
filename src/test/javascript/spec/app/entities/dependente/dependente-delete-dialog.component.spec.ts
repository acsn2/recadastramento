/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { RecadastramentoTestModule } from '../../../test.module';
import { DependenteDeleteDialogComponent } from 'app/entities/dependente/dependente-delete-dialog.component';
import { DependenteService } from 'app/entities/dependente/dependente.service';

describe('Component Tests', () => {
    describe('Dependente Management Delete Component', () => {
        let comp: DependenteDeleteDialogComponent;
        let fixture: ComponentFixture<DependenteDeleteDialogComponent>;
        let service: DependenteService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [RecadastramentoTestModule],
                declarations: [DependenteDeleteDialogComponent]
            })
                .overrideTemplate(DependenteDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(DependenteDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DependenteService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it(
                'Should call delete service on confirmDelete',
                inject(
                    [],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });
});