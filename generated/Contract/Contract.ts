// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Created extends EthereumEvent {
  get params(): Created__Params {
    return new Created__Params(this);
  }
}

export class Created__Params {
  _event: Created;

  constructor(event: Created) {
    this._event = event;
  }

  get requestId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get payee(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get payer(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get creator(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get data(): string {
    return this._event.parameters[4].value.toString();
  }
}

export class Accepted extends EthereumEvent {
  get params(): Accepted__Params {
    return new Accepted__Params(this);
  }
}

export class Accepted__Params {
  _event: Accepted;

  constructor(event: Accepted) {
    this._event = event;
  }

  get requestId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class Canceled extends EthereumEvent {
  get params(): Canceled__Params {
    return new Canceled__Params(this);
  }
}

export class Canceled__Params {
  _event: Canceled;

  constructor(event: Canceled) {
    this._event = event;
  }

  get requestId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class NewSubPayee extends EthereumEvent {
  get params(): NewSubPayee__Params {
    return new NewSubPayee__Params(this);
  }
}

export class NewSubPayee__Params {
  _event: NewSubPayee;

  constructor(event: NewSubPayee) {
    this._event = event;
  }

  get requestId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get payee(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class UpdateExpectedAmount extends EthereumEvent {
  get params(): UpdateExpectedAmount__Params {
    return new UpdateExpectedAmount__Params(this);
  }
}

export class UpdateExpectedAmount__Params {
  _event: UpdateExpectedAmount;

  constructor(event: UpdateExpectedAmount) {
    this._event = event;
  }

  get requestId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get payeeIndex(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get deltaAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class UpdateBalance extends EthereumEvent {
  get params(): UpdateBalance__Params {
    return new UpdateBalance__Params(this);
  }
}

export class UpdateBalance__Params {
  _event: UpdateBalance;

  constructor(event: UpdateBalance) {
    this._event = event;
  }

  get requestId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get payeeIndex(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get deltaAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class NewTrustedContract extends EthereumEvent {
  get params(): NewTrustedContract__Params {
    return new NewTrustedContract__Params(this);
  }
}

export class NewTrustedContract__Params {
  _event: NewTrustedContract;

  constructor(event: NewTrustedContract) {
    this._event = event;
  }

  get newContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RemoveTrustedContract extends EthereumEvent {
  get params(): RemoveTrustedContract__Params {
    return new RemoveTrustedContract__Params(this);
  }
}

export class RemoveTrustedContract__Params {
  _event: RemoveTrustedContract;

  constructor(event: RemoveTrustedContract) {
    this._event = event;
  }

  get oldContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Pause extends EthereumEvent {
  get params(): Pause__Params {
    return new Pause__Params(this);
  }
}

export class Pause__Params {
  _event: Pause;

  constructor(event: Pause) {
    this._event = event;
  }
}

export class Unpause extends EthereumEvent {
  get params(): Unpause__Params {
    return new Unpause__Params(this);
  }
}

export class Unpause__Params {
  _event: Unpause;

  constructor(event: Unpause) {
    this._event = event;
  }
}

export class OwnershipTransferred extends EthereumEvent {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Contract__subPayeesResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: Address, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromSignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromSignedBigInt(this.value2));
    return map;
  }
}

export class Contract__getRequestResult {
  value0: Address;
  value1: Address;
  value2: i32;
  value3: Address;
  value4: BigInt;
  value5: BigInt;

  constructor(
    value0: Address,
    value1: Address,
    value2: i32,
    value3: Address,
    value4: BigInt,
    value5: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromAddress(this.value1));
    map.set("value2", EthereumValue.fromI32(this.value2));
    map.set("value3", EthereumValue.fromAddress(this.value3));
    map.set("value4", EthereumValue.fromSignedBigInt(this.value4));
    map.set("value5", EthereumValue.fromSignedBigInt(this.value5));
    return map;
  }
}

export class Contract extends SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  areAllBalanceNull(_requestId: Bytes): boolean {
    let result = super.call("areAllBalanceNull", [
      EthereumValue.fromFixedBytes(_requestId)
    ]);
    return result[0].toBoolean();
  }

  getState(_requestId: Bytes): i32 {
    let result = super.call("getState", [
      EthereumValue.fromFixedBytes(_requestId)
    ]);
    return result[0].toI32();
  }

  getPayeeExpectedAmount(_requestId: Bytes, _payeeIndex: i32): BigInt {
    let result = super.call("getPayeeExpectedAmount", [
      EthereumValue.fromFixedBytes(_requestId),
      EthereumValue.fromI32(_payeeIndex)
    ]);
    return result[0].toBigInt();
  }

  createRequest(
    _creator: Address,
    _payees: Array<Address>,
    _expectedAmounts: Array<BigInt>,
    _payer: Address,
    _data: string
  ): Bytes {
    let result = super.call("createRequest", [
      EthereumValue.fromAddress(_creator),
      EthereumValue.fromAddressArray(_payees),
      EthereumValue.fromSignedBigIntArray(_expectedAmounts),
      EthereumValue.fromAddress(_payer),
      EthereumValue.fromString(_data)
    ]);
    return result[0].toBytes();
  }

  isTrustedContract(_contractAddress: Address): boolean {
    let result = super.call("isTrustedContract", [
      EthereumValue.fromAddress(_contractAddress)
    ]);
    return result[0].toBoolean();
  }

  paused(): boolean {
    let result = super.call("paused", []);
    return result[0].toBoolean();
  }

  subPayees(param0: Bytes, param1: BigInt): Contract__subPayeesResult {
    let result = super.call("subPayees", [
      EthereumValue.fromFixedBytes(param0),
      EthereumValue.fromUnsignedBigInt(param1)
    ]);
    return new Contract__subPayeesResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  getPayeeBalance(_requestId: Bytes, _payeeIndex: i32): BigInt {
    let result = super.call("getPayeeBalance", [
      EthereumValue.fromFixedBytes(_requestId),
      EthereumValue.fromI32(_payeeIndex)
    ]);
    return result[0].toBigInt();
  }

  trustedCurrencyContracts(param0: Address): i32 {
    let result = super.call("trustedCurrencyContracts", [
      EthereumValue.fromAddress(param0)
    ]);
    return result[0].toI32();
  }

  owner(): Address {
    let result = super.call("owner", []);
    return result[0].toAddress();
  }

  getBalance(_requestId: Bytes): BigInt {
    let result = super.call("getBalance", [
      EthereumValue.fromFixedBytes(_requestId)
    ]);
    return result[0].toBigInt();
  }

  getPayeeAddress(_requestId: Bytes, _payeeIndex: i32): Address {
    let result = super.call("getPayeeAddress", [
      EthereumValue.fromFixedBytes(_requestId),
      EthereumValue.fromI32(_payeeIndex)
    ]);
    return result[0].toAddress();
  }

  getCurrencyContract(_requestId: Bytes): Address {
    let result = super.call("getCurrencyContract", [
      EthereumValue.fromFixedBytes(_requestId)
    ]);
    return result[0].toAddress();
  }

  numRequests(): BigInt {
    let result = super.call("numRequests", []);
    return result[0].toBigInt();
  }

  getPayer(_requestId: Bytes): Address {
    let result = super.call("getPayer", [
      EthereumValue.fromFixedBytes(_requestId)
    ]);
    return result[0].toAddress();
  }

  extractBytes32(_data: Bytes, offset: BigInt): Bytes {
    let result = super.call("extractBytes32", [
      EthereumValue.fromBytes(_data),
      EthereumValue.fromUnsignedBigInt(offset)
    ]);
    return result[0].toBytes();
  }

  getSubPayeesCount(_requestId: Bytes): i32 {
    let result = super.call("getSubPayeesCount", [
      EthereumValue.fromFixedBytes(_requestId)
    ]);
    return result[0].toI32();
  }

  createRequestFromBytes(_data: Bytes): Bytes {
    let result = super.call("createRequestFromBytes", [
      EthereumValue.fromBytes(_data)
    ]);
    return result[0].toBytes();
  }

  getPayeeIndex(_requestId: Bytes, _address: Address): i32 {
    let result = super.call("getPayeeIndex", [
      EthereumValue.fromFixedBytes(_requestId),
      EthereumValue.fromAddress(_address)
    ]);
    return result[0].toI32();
  }

  getStatusContract(_contractAddress: Address): i32 {
    let result = super.call("getStatusContract", [
      EthereumValue.fromAddress(_contractAddress)
    ]);
    return result[0].toI32();
  }

  getRequest(_requestId: Bytes): Contract__getRequestResult {
    let result = super.call("getRequest", [
      EthereumValue.fromFixedBytes(_requestId)
    ]);
    return new Contract__getRequestResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toI32(),
      result[3].toAddress(),
      result[4].toBigInt(),
      result[5].toBigInt()
    );
  }

  getExpectedAmount(_requestId: Bytes): BigInt {
    let result = super.call("getExpectedAmount", [
      EthereumValue.fromFixedBytes(_requestId)
    ]);
    return result[0].toBigInt();
  }
}

export class AdminRemoveTrustedCurrencyContractCall extends EthereumCall {
  get inputs(): AdminRemoveTrustedCurrencyContractCall__Inputs {
    return new AdminRemoveTrustedCurrencyContractCall__Inputs(this);
  }

  get outputs(): AdminRemoveTrustedCurrencyContractCall__Outputs {
    return new AdminRemoveTrustedCurrencyContractCall__Outputs(this);
  }
}

export class AdminRemoveTrustedCurrencyContractCall__Inputs {
  _call: AdminRemoveTrustedCurrencyContractCall;

  constructor(call: AdminRemoveTrustedCurrencyContractCall) {
    this._call = call;
  }

  get _oldTrustedContractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AdminRemoveTrustedCurrencyContractCall__Outputs {
  _call: AdminRemoveTrustedCurrencyContractCall;

  constructor(call: AdminRemoveTrustedCurrencyContractCall) {
    this._call = call;
  }
}

export class UnpauseCall extends EthereumCall {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class CreateRequestCall extends EthereumCall {
  get inputs(): CreateRequestCall__Inputs {
    return new CreateRequestCall__Inputs(this);
  }

  get outputs(): CreateRequestCall__Outputs {
    return new CreateRequestCall__Outputs(this);
  }
}

export class CreateRequestCall__Inputs {
  _call: CreateRequestCall;

  constructor(call: CreateRequestCall) {
    this._call = call;
  }

  get _creator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _payees(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _expectedAmounts(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get _payer(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _data(): string {
    return this._call.inputValues[4].value.toString();
  }
}

export class CreateRequestCall__Outputs {
  _call: CreateRequestCall;

  constructor(call: CreateRequestCall) {
    this._call = call;
  }

  get requestId(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class PauseCall extends EthereumCall {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class AdminAddTrustedCurrencyContractCall extends EthereumCall {
  get inputs(): AdminAddTrustedCurrencyContractCall__Inputs {
    return new AdminAddTrustedCurrencyContractCall__Inputs(this);
  }

  get outputs(): AdminAddTrustedCurrencyContractCall__Outputs {
    return new AdminAddTrustedCurrencyContractCall__Outputs(this);
  }
}

export class AdminAddTrustedCurrencyContractCall__Inputs {
  _call: AdminAddTrustedCurrencyContractCall;

  constructor(call: AdminAddTrustedCurrencyContractCall) {
    this._call = call;
  }

  get _newContractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AdminAddTrustedCurrencyContractCall__Outputs {
  _call: AdminAddTrustedCurrencyContractCall;

  constructor(call: AdminAddTrustedCurrencyContractCall) {
    this._call = call;
  }
}

export class UpdateBalanceCall extends EthereumCall {
  get inputs(): UpdateBalanceCall__Inputs {
    return new UpdateBalanceCall__Inputs(this);
  }

  get outputs(): UpdateBalanceCall__Outputs {
    return new UpdateBalanceCall__Outputs(this);
  }
}

export class UpdateBalanceCall__Inputs {
  _call: UpdateBalanceCall;

  constructor(call: UpdateBalanceCall) {
    this._call = call;
  }

  get _requestId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _payeeIndex(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get _deltaAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class UpdateBalanceCall__Outputs {
  _call: UpdateBalanceCall;

  constructor(call: UpdateBalanceCall) {
    this._call = call;
  }
}

export class CancelCall extends EthereumCall {
  get inputs(): CancelCall__Inputs {
    return new CancelCall__Inputs(this);
  }

  get outputs(): CancelCall__Outputs {
    return new CancelCall__Outputs(this);
  }
}

export class CancelCall__Inputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }

  get _requestId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class CancelCall__Outputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }
}

export class UpdateExpectedAmountCall extends EthereumCall {
  get inputs(): UpdateExpectedAmountCall__Inputs {
    return new UpdateExpectedAmountCall__Inputs(this);
  }

  get outputs(): UpdateExpectedAmountCall__Outputs {
    return new UpdateExpectedAmountCall__Outputs(this);
  }
}

export class UpdateExpectedAmountCall__Inputs {
  _call: UpdateExpectedAmountCall;

  constructor(call: UpdateExpectedAmountCall) {
    this._call = call;
  }

  get _requestId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _payeeIndex(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get _deltaAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class UpdateExpectedAmountCall__Outputs {
  _call: UpdateExpectedAmountCall;

  constructor(call: UpdateExpectedAmountCall) {
    this._call = call;
  }
}

export class EmergencyERC20DrainCall extends EthereumCall {
  get inputs(): EmergencyERC20DrainCall__Inputs {
    return new EmergencyERC20DrainCall__Inputs(this);
  }

  get outputs(): EmergencyERC20DrainCall__Outputs {
    return new EmergencyERC20DrainCall__Outputs(this);
  }
}

export class EmergencyERC20DrainCall__Inputs {
  _call: EmergencyERC20DrainCall;

  constructor(call: EmergencyERC20DrainCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class EmergencyERC20DrainCall__Outputs {
  _call: EmergencyERC20DrainCall;

  constructor(call: EmergencyERC20DrainCall) {
    this._call = call;
  }
}

export class CreateRequestFromBytesCall extends EthereumCall {
  get inputs(): CreateRequestFromBytesCall__Inputs {
    return new CreateRequestFromBytesCall__Inputs(this);
  }

  get outputs(): CreateRequestFromBytesCall__Outputs {
    return new CreateRequestFromBytesCall__Outputs(this);
  }
}

export class CreateRequestFromBytesCall__Inputs {
  _call: CreateRequestFromBytesCall;

  constructor(call: CreateRequestFromBytesCall) {
    this._call = call;
  }

  get _data(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class CreateRequestFromBytesCall__Outputs {
  _call: CreateRequestFromBytesCall;

  constructor(call: CreateRequestFromBytesCall) {
    this._call = call;
  }

  get requestId(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class AcceptCall extends EthereumCall {
  get inputs(): AcceptCall__Inputs {
    return new AcceptCall__Inputs(this);
  }

  get outputs(): AcceptCall__Outputs {
    return new AcceptCall__Outputs(this);
  }
}

export class AcceptCall__Inputs {
  _call: AcceptCall;

  constructor(call: AcceptCall) {
    this._call = call;
  }

  get _requestId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class AcceptCall__Outputs {
  _call: AcceptCall;

  constructor(call: AcceptCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends EthereumCall {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
