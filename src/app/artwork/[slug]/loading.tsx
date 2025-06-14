import { SiteLayout } from '@/components/SiteLayout';
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Loading() {
  return (
    <SiteLayout>
      <div className="max-w-4xl mx-auto">
         <Button variant="outline" disabled className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Gallery
          </Button>
        <div className="bg-card p-6 sm:p-8 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Skeleton className="relative aspect-[3/4] w-full rounded-md" />
            <div className="space-y-4">
              <Skeleton className="h-10 w-3/4 rounded-md" />
              <Skeleton className="h-6 w-1/4 rounded-md" />
              <div className="my-6 h-px w-full bg-border" />
              <div className="space-y-4">
                <div>
                  <Skeleton className="h-6 w-1/3 mb-2 rounded-md" />
                  <div className="flex flex-wrap gap-2">
                    <Skeleton className="h-6 w-20 rounded-full" />
                    <Skeleton className="h-6 w-24 rounded-full" />
                    <Skeleton className="h-6 w-16 rounded-full" />
                  </div>
                </div>
                <div>
                  <Skeleton className="h-6 w-1/3 mb-1 rounded-md" />
                  <Skeleton className="h-5 w-1/2 rounded-md" />
                </div>
              </div>
            </div>
          </div>
          <div className="my-8 h-px w-full bg-border" />
          <div>
            <Skeleton className="h-8 w-1/2 mb-3 rounded-md" />
            <Skeleton className="h-5 w-full mb-2 rounded-md" />
            <Skeleton className="h-5 w-full mb-2 rounded-md" />
            <Skeleton className="h-5 w-3/4 rounded-md" />
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
