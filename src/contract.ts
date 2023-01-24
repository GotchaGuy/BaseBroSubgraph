
import { Claimed } from "../generated/Contract/Contract"
import { Claimer } from "../generated/schema"


export function handleClaimed(event: Claimed): void {
  let claimer = Claimer.load(event.params.claimer)
  
  if (!claimer) {
    claimer = new Claimer(event.params.claimer)
  }

  claimer.timestamp = event.block.timestamp;
  
  claimer.save()
}
