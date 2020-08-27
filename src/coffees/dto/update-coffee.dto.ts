import { PartialType } from '@nestjs/swagger';
import { CreateCoffeeDto } from './create-coffee.dto';

// All of the properties of the extended type are made optional.
// Like this we remove the redundancy of repeating the same fields here and there
// and the only difference being that here they are optional. PartialType
// also inherits all of the validation rules set by the decorators.
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
