import React from "react";

const AuthLayout = ({ children, leftPanel }) => (
  <div className="relative flex h-screen w-full flex-col group/design-root overflow-hidden">
    <div className="flex h-full grow flex-col">
      <div className="flex flex-1">
        <div className="flex w-full flex-col md:flex-row">
          {/* Left Panel */}
          {leftPanel && (
            <div className="relative hidden h-full w-full flex-col items-center justify-center bg-slate-500 md:flex md:w-1/2">
              {leftPanel}
            </div>
          )}
          {/* Right Panel */}
          <div className="flex w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark p-6 md:w-1/2 md:p-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AuthLayout;
