// package: api
// file: api.proto

import * as api_pb from "./api_pb";
import {grpc} from "grpc-web-client";

type CoreListenEvent = {
  readonly methodName: string;
  readonly service: typeof Core;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_pb.ListenEventRequest;
  readonly responseType: typeof api_pb.EventData;
};

type CoreListenResult = {
  readonly methodName: string;
  readonly service: typeof Core;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_pb.ListenResultRequest;
  readonly responseType: typeof api_pb.ResultData;
};

type CoreExecuteTask = {
  readonly methodName: string;
  readonly service: typeof Core;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_pb.ExecuteTaskRequest;
  readonly responseType: typeof api_pb.ExecuteTaskReply;
};

type CoreStartService = {
  readonly methodName: string;
  readonly service: typeof Core;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_pb.StartServiceRequest;
  readonly responseType: typeof api_pb.StartServiceReply;
};

type CoreStopService = {
  readonly methodName: string;
  readonly service: typeof Core;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_pb.StopServiceRequest;
  readonly responseType: typeof api_pb.StopServiceReply;
};

type CoreDeployService = {
  readonly methodName: string;
  readonly service: typeof Core;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof api_pb.DeployServiceRequest;
  readonly responseType: typeof api_pb.DeployServiceReply;
};

type CoreDeleteService = {
  readonly methodName: string;
  readonly service: typeof Core;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_pb.DeleteServiceRequest;
  readonly responseType: typeof api_pb.DeleteServiceReply;
};

type CoreListServices = {
  readonly methodName: string;
  readonly service: typeof Core;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_pb.ListServicesRequest;
  readonly responseType: typeof api_pb.ListServicesReply;
};

type CoreGetService = {
  readonly methodName: string;
  readonly service: typeof Core;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_pb.GetServiceRequest;
  readonly responseType: typeof api_pb.GetServiceReply;
};

type CoreServiceLogs = {
  readonly methodName: string;
  readonly service: typeof Core;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof api_pb.ServiceLogsRequest;
  readonly responseType: typeof api_pb.LogData;
};

type CoreCreateWorkflow = {
  readonly methodName: string;
  readonly service: typeof Core;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_pb.CreateWorkflowRequest;
  readonly responseType: typeof api_pb.CreateWorkflowReply;
};

type CoreDeleteWorkflow = {
  readonly methodName: string;
  readonly service: typeof Core;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_pb.DeleteWorkflowRequest;
  readonly responseType: typeof api_pb.DeleteWorkflowReply;
};

export class Core {
  static readonly serviceName: string;
  static readonly ListenEvent: CoreListenEvent;
  static readonly ListenResult: CoreListenResult;
  static readonly ExecuteTask: CoreExecuteTask;
  static readonly StartService: CoreStartService;
  static readonly StopService: CoreStopService;
  static readonly DeployService: CoreDeployService;
  static readonly DeleteService: CoreDeleteService;
  static readonly ListServices: CoreListServices;
  static readonly GetService: CoreGetService;
  static readonly ServiceLogs: CoreServiceLogs;
  static readonly CreateWorkflow: CoreCreateWorkflow;
  static readonly DeleteWorkflow: CoreDeleteWorkflow;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: () => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: () => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class CoreClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listenEvent(requestMessage: api_pb.ListenEventRequest, metadata?: grpc.Metadata): ResponseStream<api_pb.EventData>;
  listenResult(requestMessage: api_pb.ListenResultRequest, metadata?: grpc.Metadata): ResponseStream<api_pb.ResultData>;
  executeTask(
    requestMessage: api_pb.ExecuteTaskRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pb.ExecuteTaskReply|null) => void
  ): UnaryResponse;
  executeTask(
    requestMessage: api_pb.ExecuteTaskRequest,
    callback: (error: ServiceError|null, responseMessage: api_pb.ExecuteTaskReply|null) => void
  ): UnaryResponse;
  startService(
    requestMessage: api_pb.StartServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pb.StartServiceReply|null) => void
  ): UnaryResponse;
  startService(
    requestMessage: api_pb.StartServiceRequest,
    callback: (error: ServiceError|null, responseMessage: api_pb.StartServiceReply|null) => void
  ): UnaryResponse;
  stopService(
    requestMessage: api_pb.StopServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pb.StopServiceReply|null) => void
  ): UnaryResponse;
  stopService(
    requestMessage: api_pb.StopServiceRequest,
    callback: (error: ServiceError|null, responseMessage: api_pb.StopServiceReply|null) => void
  ): UnaryResponse;
  deployService(metadata?: grpc.Metadata): BidirectionalStream<api_pb.DeployServiceRequest, api_pb.DeployServiceReply>;
  deleteService(
    requestMessage: api_pb.DeleteServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pb.DeleteServiceReply|null) => void
  ): UnaryResponse;
  deleteService(
    requestMessage: api_pb.DeleteServiceRequest,
    callback: (error: ServiceError|null, responseMessage: api_pb.DeleteServiceReply|null) => void
  ): UnaryResponse;
  listServices(
    requestMessage: api_pb.ListServicesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pb.ListServicesReply|null) => void
  ): UnaryResponse;
  listServices(
    requestMessage: api_pb.ListServicesRequest,
    callback: (error: ServiceError|null, responseMessage: api_pb.ListServicesReply|null) => void
  ): UnaryResponse;
  getService(
    requestMessage: api_pb.GetServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pb.GetServiceReply|null) => void
  ): UnaryResponse;
  getService(
    requestMessage: api_pb.GetServiceRequest,
    callback: (error: ServiceError|null, responseMessage: api_pb.GetServiceReply|null) => void
  ): UnaryResponse;
  serviceLogs(requestMessage: api_pb.ServiceLogsRequest, metadata?: grpc.Metadata): ResponseStream<api_pb.LogData>;
  createWorkflow(
    requestMessage: api_pb.CreateWorkflowRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pb.CreateWorkflowReply|null) => void
  ): UnaryResponse;
  createWorkflow(
    requestMessage: api_pb.CreateWorkflowRequest,
    callback: (error: ServiceError|null, responseMessage: api_pb.CreateWorkflowReply|null) => void
  ): UnaryResponse;
  deleteWorkflow(
    requestMessage: api_pb.DeleteWorkflowRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pb.DeleteWorkflowReply|null) => void
  ): UnaryResponse;
  deleteWorkflow(
    requestMessage: api_pb.DeleteWorkflowRequest,
    callback: (error: ServiceError|null, responseMessage: api_pb.DeleteWorkflowReply|null) => void
  ): UnaryResponse;
}

