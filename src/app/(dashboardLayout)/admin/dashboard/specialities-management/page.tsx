"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@/components/ui/dialog";

const AdminSchedulesManagementPage = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Schedules Management</h1>
          <p className="text-sm text-muted-foreground">
            Manage and add schedule specialties from here
          </p>
        </div>

        {/* Add Specialty Button */}
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Specialty</Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Specialty</DialogTitle>
            </DialogHeader>

            {/* Form */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter specialty title" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="icon">Icon</Label>
                <Input id="icon" placeholder="Enter icon name or URL" />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>

                <Button>Save Specialty</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminSchedulesManagementPage;
