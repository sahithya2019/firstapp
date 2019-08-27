import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token-interceptor.service';




export const httpprovider=[
    {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}
]