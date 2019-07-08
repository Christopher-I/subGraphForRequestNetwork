import {
  Created as CreatedEvent,
  Accepted as AcceptedEvent,
  Canceled as CanceledEvent,
  NewSubPayee as NewSubPayeeEvent,
  UpdateExpectedAmount as UpdateExpectedAmountEvent,
  UpdateBalance as UpdateBalanceEvent,
  NewTrustedContract as NewTrustedContractEvent,
  RemoveTrustedContract as RemoveTrustedContractEvent,
  Pause as PauseEvent,
  Unpause as UnpauseEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/Contract/Contract"
import {
  Created,
  Accepted,
  Canceled,
  NewSubPayee,
  UpdateExpectedAmount,
  UpdateBalance,
  NewTrustedContract,
  RemoveTrustedContract,
  Pause,
  Unpause,
  OwnershipTransferred
} from "../generated/schema"

export function handleCreated(event: CreatedEvent): void {
  let entity = new Created(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.requestId = event.params.requestId
  entity.payee = event.params.payee
  entity.payer = event.params.payer
  entity.creator = event.params.creator
  entity.data = event.params.data
  entity.save()
}

export function handleAccepted(event: AcceptedEvent): void {
  let entity = new Accepted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.requestId = event.params.requestId
  entity.save()
}

export function handleCanceled(event: CanceledEvent): void {
  let entity = new Canceled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.requestId = event.params.requestId
  entity.save()
}

export function handleNewSubPayee(event: NewSubPayeeEvent): void {
  let entity = new NewSubPayee(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.requestId = event.params.requestId
  entity.payee = event.params.payee
  entity.save()
}

export function handleUpdateExpectedAmount(
  event: UpdateExpectedAmountEvent
): void {
  let entity = new UpdateExpectedAmount(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.requestId = event.params.requestId
  entity.payeeIndex = event.params.payeeIndex
  entity.deltaAmount = event.params.deltaAmount
  entity.save()
}

export function handleUpdateBalance(event: UpdateBalanceEvent): void {
  let entity = new UpdateBalance(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.requestId = event.params.requestId
  entity.payeeIndex = event.params.payeeIndex
  entity.deltaAmount = event.params.deltaAmount
  entity.save()
}

export function handleNewTrustedContract(event: NewTrustedContractEvent): void {
  let entity = new NewTrustedContract(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newContract = event.params.newContract
  entity.save()
}

export function handleRemoveTrustedContract(
  event: RemoveTrustedContractEvent
): void {
  let entity = new RemoveTrustedContract(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldContract = event.params.oldContract
  entity.save()
}

export function handlePause(event: PauseEvent): void {
  let entity = new Pause(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  entity.save()
}

export function handleUnpause(event: UnpauseEvent): void {
  let entity = new Unpause(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}
